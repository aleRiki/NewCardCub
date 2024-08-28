export type FiltersTypes ={
    result: ResultFilerType| any | null;
    loading: boolean;
    error: string;

}
export type ResultFilerType ={
    schema:{
        attributes:{
            probehedor: {
                    enum: any;
                };
            };
        };	
    };