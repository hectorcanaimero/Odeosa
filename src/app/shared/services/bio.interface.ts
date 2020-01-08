export interface Bio {
    id: number;
    date: string;
    date_gmt: string;
    guid: Guid;
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: Guid;
    featured_media: number;
    template: string;
    tera: Tera;
    _links: Links;
}

export interface Links {
    self: Self[];
    collection: Self[];
    about: Self[];
    'wp:attachment': Self[];
    curies: Cury[];
}

export interface Cury {
    name: string;
    href: string;
    templated: boolean;
}

export interface Self {
    href: string;
}

export interface Tera {
    bio_especialidades: string[];
    bio_fone: string[];
    bio_endereco: string[];
    bio_formacao: string[];
    bio_cpf: string[];
    bio_crp: string[];
    bio_consulta: string[];
    bio_coaching: string[];
    bio_foto: string[];
    bio_email: string[];
    bio_nome: string[];
    _wpb_vc_js_status: string[];
    insight_page_options: string[];
    _edit_lock: string[];
    _edit_last: string[];
    _wp_old_date: string[];
    slide_template: string[];
    bio_senha: string[];
    bio_link_consulta: string[];
    bio_link_coaching: string[];
    _yoast_wpseo_focuskeywords: string[];
    _yoast_wpseo_keywordsynonyms: string[];
}

export interface Guid {
    rendered: string;
}
