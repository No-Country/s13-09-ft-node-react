export interface User {
	nombre: string;
	correo: string;
	password: string;
	edad: number;
	electricidad: number;
	gas: number;
	transporte: string;
	estado: boolean;
	img: string;
	transporteAereo: number;
	transporteTerrestre: number;
}

export interface OffsetItem {
	minTrees: number;
	message: string;
}

export interface EquivalenceItem {
	carDistance: number;
	message: string;
}

export interface CarbonFootprintData {
	data: {
		offsets: OffsetItem[];
		statistics: {
			carbonWeight: number;
			equivalences: EquivalenceItem[];
			carbon_footprint: {
				electricity: number;
				gas: number;
				total: number;
			};
			transport: {
				land: number;
				air: number;
				total: number;
			};
			emission_percentage: {
				electricity_perc: number; // Assuming 0 is a number, not a string
				gas_perc: string; // Changed from number to string
				higher_emission: {
					category: string;
					value: string;
				};
				transport_perc: {
					air_perc: number;
					land_perc: number;
					total: string;
				};
			};
		};
		equivalences: EquivalenceItem[]; // Changed from any[] to EquivalenceItem[]
	};
	message: string;
}

export interface UserResponse {
	message: string;
	usuario: User;
}
export interface ResponseErrorMessage {
	msg: string;
}
export interface UserResponseError {
	message?: string;
	errors?: { errors: ResponseErrorMessage[] };
}
export interface UserLogin {
	correo: string;
	password: string;
}
export interface UserLoginResponse {
	message: string;
	usuario: User;
	token: string;
}

export interface UserSignUpPayload {
	nombre: string;
	correo: string;
	password: string;
	img?: string;
}

export interface UserSignUpResponse {
	message: string;
	usuario: User;
	token: string;
}

export type UserUpdatePayload = Partial<User>;

export interface UserUpdateResponse {
	message: string;
	usuario: User;
}

export interface UserDeleteResponse {
	message: string;
}

export interface Avatar {
	id: string;
	descripcion: string;
	url: string;
}

export interface AvatarResponse {
	avatars: Avatar[];
}

export interface AuthResponse {
	message: string;
	isTokenValid: boolean;
	usuario: string;
	img: string;
}

export interface AuthResponseError {
	message: string;
	isTokenValid?: boolean;
}

export interface CarbonOffsetCalculatorPayload {
	residence: string;
	transport: {
		public: number;
		bus: {
			kms: number;
		};
		colectivo: {
			kms: number;
		};
		metro: {
			kms: number;
		};
		car: {
			kms: number;
			size: string;
			fuel: boolean;
		};
		motorcycle: {
			kms: number;
		};
		airplane: {
			kms: number;
			numberOfSeats: number;
			rounTrip: boolean;
		};
	};
	bike: {
		kms: number;
	};
	walk: {
		kms: number;
	};
	electricity: {
		renewable_source: boolean;
		consumption: number;
	};
	project: string;
	gas: {
		type: string;
		units: string;
		consumption: number;
	};
}

export interface CarbonOffsetCalculatorResponse {
	carbonOffset: CarbonOffset;
}

export interface CarbonOffset {
	offsets: Array<Offset>;
	offset_by_user: Array<Offset>;
	statistics: Array<Statistics>;
}

export interface Offset {
	minTrees?: number;
	car_emission_offset?: number;
	message: string;
}

export interface HigherEmission {
	category: string;
	value: number;
}

export interface Statistics {
	carbon_footprint: {
		transport: Transport;
		gas: number;
		electricity: number;
		total: number;
	};
	emission_percentage: {
		transport_perc: TransportPercentage;
		gas_perc: number;
		electricity_perc: number;
		higher_emission: HigherEmission;
	};
}

export interface Transport {
	land: number;
	air: number;
	total: number;
}

export interface TransportPercentage {
	air_perc: number;
	land_perc: number;
	total: number;
}
export interface CarbonFootprintResponse {
	kwh: number;
	country: string;
	energia_renovable: boolean;
	carbon_footprint?: number;
}
export interface NewsletterPayload {
	correo: string;
}

export interface WelcomeResponse {
	message: string;
}

export interface GetAvatarsResponse {
	avatars: Avatar[];
}

export interface ITransport {
	id: number;
}

export interface CalculateTransportFootprintPayload {
	transport: ITransport;
	distance: number;
}

export interface CalculateTransportFootprintResponse {
	transport: ITransport;
	footprint: number;
}

export interface CalculateCarbonFootprintPayload {
	electricidad: {
		kwh: number;
		pais: string;
		energia_renovable: boolean;
	};
}

export interface NewsletterResponse {
	message: string;
}

export interface CarbonFootprintResponse2 {
	message: string;
	data: CarbonData;
}

export interface CarbonData {
	offsets: Offset[];
	statistics: Statistics;
	offset_by_user: string[];
}
