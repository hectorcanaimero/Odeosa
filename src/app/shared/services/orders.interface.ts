export interface Orders {
    id: number;
    parent_id: number;
    number: string;
    order_key: string;
    created_via: string;
    version: string;
    status: string;
    currency: string;
    date_created: string;
    date_created_gmt: string;
    date_modified: string;
    date_modified_gmt: string;
    discount_total: string;
    discount_tax: string;
    shipping_total: string;
    shipping_tax: string;
    cart_tax: string;
    total: string;
    total_tax: string;
    prices_include_tax: boolean;
    customer_id: number;
    customer_ip_address: string;
    customer_user_agent: string;
    customer_note: string;
    billing: Billing;
    shipping: Shipping;
    payment_method: string;
    payment_method_title: string;
    transaction_id: string;
    date_paid: string;
    date_paid_gmt: string;
    date_completed?: any;
    date_completed_gmt?: any;
    cart_hash: string;
    meta_data: Metadatum[];
    line_items: Lineitem[];
    tax_lines: any[];
    shipping_lines: any[];
    fee_lines: any[];
    coupon_lines: any[];
    refunds: any[];
    _links: Links;
}

export interface Links {
    self: Self[];
    collection: Self[];
}

export interface Self {
    href: string;
}

export interface Lineitem {
    id: number;
    name: string;
    product_id: number;
    variation_id: number;
    quantity: number;
    tax_class: string;
    subtotal: string;
    subtotal_tax: string;
    total: string;
    total_tax: string;
    taxes: any[];
    meta_data: any[];
    sku: string;
    price: number;
}

export interface Metadatum {
    id: number;
    key: string;
    value: string;
}

export interface Shipping {
    first_name: string;
    last_name: string;
    company: string;
    address_1: string;
    address_2: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
    number: string;
    neighborhood: string;
}

export interface Billing {
    first_name: string;
    last_name: string;
    company: string;
    address_1: string;
    address_2: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
    email: string;
    phone: string;
    number: string;
    neighborhood: string;
    persontype: string;
    cpf: string;
    rg: string;
    cnpj: string;
    ie: string;
    birthdate: string;
    sex: boolean;
    cellphone: string;
}
