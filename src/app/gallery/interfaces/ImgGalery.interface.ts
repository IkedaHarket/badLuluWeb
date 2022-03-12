export interface ImgGallery {
    docs?:          Nail[];
    totalDocs?:     number;
    limit?:         number;
    totalPages?:    number;
    page?:          number;
    pagingCounter?: number;
    hasPrevPage?:   boolean;
    hasNextPage?:   boolean;
    prevPage?:      null;
    nextPage?:      null;
    ok?:            boolean;
    nail?:          Nail;
}

export interface Nail {
    _id?:           string;
    nombre?:        string;
    imagen?:        string;
    createdAt?:     Date;
    updatedAt?:     Date;
    __v?:           number;
}