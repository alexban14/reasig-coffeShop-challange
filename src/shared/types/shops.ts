type FindNearestRequest = {
	latitude: number;
	longitude: number;
};

type FindNearestResponse = {
	name: string,
	distance: number,
} & FindNearestRequest;

type CsvShopData = {
	name: string;
	latitude: string;
	longitude: string;
}

export { FindNearestRequest, FindNearestResponse, CsvShopData };