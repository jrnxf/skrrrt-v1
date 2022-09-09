import { AddressType, Client, PlaceAutocompleteType } from '@googlemaps/google-maps-services-js'

export class LocationsService {
  static googleMapsClient: Client = new Client({})

  static async getMatchingCities(city: string): Promise<any | null> {
    try {
      const response = await this.googleMapsClient.placeAutocomplete({
        params: {
          input: city,
          types: PlaceAutocompleteType.cities,
          key: process.env.GOOGLE_API_KEY,
        },
        timeout: 3000,
      })
      return response.data.predictions.map(({ description, place_id }) => ({
        description,
        place_id,
      }))
    } catch (e) {
      console.error(e.response.data.error_message, e.stack, LocationsService.name)
    }
  }

  static async getPlaceByPlaceId(place_id: string): Promise<any | null> {
    try {
      const response = await this.googleMapsClient.placeDetails({
        params: {
          place_id: place_id,
          key: process.env.GOOGLE_API_KEY,
        },
        timeout: 3000,
      })

      const { lat, lng } = response?.data?.result?.geometry?.location
      const { address_components } = response.data.result
      const { formatted_address } = response.data.result

      const countryData = address_components.find((address) =>
        address.types.includes(AddressType.country),
      )
      const country_long_name = countryData.long_name
      const country_short_name = countryData.short_name
      return {
        lat,
        lng,
        country_long_name,
        country_short_name,
        formatted_address,
      }
    } catch (e) {
      console.error(e.response.data.error_message, e.stack, LocationsService.name)
    }
  }
}
