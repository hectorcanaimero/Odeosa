import { Component, OnInit, Input, ViewChild, HostListener,
    AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { ExportService } from '../../services/export.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, AfterViewInit {

  @ViewChild(MdbTablePaginationComponent, { static: true })
  mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true })
  mdbTable: MdbTableDirective;

  nom: any = [];
  elements: any = [];
  previous: any = [];
  odeosa: any = [];
  coaching: any = [];
  orders: any = [];
  public arr: any = [];
  head1 = ['data', 'status', 'subtotal', 'tax', 'total'];
  constructor(
    private api: ApiService,
    private router: Router,
    private exportService: ExportService,
    private cdRef: ChangeDetectorRef
  ) {
    if (!localStorage.getItem('odeosa')) {
      this.router.navigate(['acesso']);
    } else {
      this.odeosa = JSON.parse(localStorage.getItem('odeosa'));
    }
  }

  ngOnInit() {
    this.getCoaching();
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(10);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  getCoaching() {
    this.api.getproductSlug(this.api.slug(this.odeosa.coaching[0])).subscribe(
      data => {
        this.coaching = data[0];
        const product = data[0].id;
        this.api.getOrders().subscribe(
          rows => {
            rows.forEach(A => {
              const line = A.line_items;
              line.forEach(B => {
                if (B.product_id === product) {
                  this.arr = {
                    data: A.date_created,
                    status: A.status,
                    subtotal: B.subtotal,
                    tax: B.subtotal_tax,
                    total: B.total
                  };
                  this.orders.push(this.arr);
                  this.mdbTable.setDataSource(this.orders);
                  this.orders = this.mdbTable.getDataSource();
                  this.previous = this.mdbTable.getDataSource();
                }
              });
            });
          }
        );
      },
      erro => console.log(erro)
    );
  }

  export() {
    this.exportService.exportExcel(this.orders, 'coaching');
  }

  sumTotal(marks: any) {
    let total = 0;
    marks.forEach((item) => {
      total += Number(item.total);
    });
    return total;
  }

  sumSubTotal(marks: any) {
    let total = 0;
    marks.forEach((item) => {
      total += Number(item.subtotal);
    });
    return total;
  }

  sumTax(marks: any) {
    let total = 0;
    marks.forEach((item) => {
      total += Number(item.subtotal_tax);
    });
    return total;
  }
}
