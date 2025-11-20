export const envSchema = {
  type: 'object',
  required: ['PORT', 'COFFEE_SHOPS_CSV_LINK'],
  properties: {
    PORT: {
      type: 'string',
      default: 3131 
    },
    COFFEE_SHOPS_CSV_LINK: {
      type: 'string',
      default: 'https://static.reasig.ro/interview/coffee_shops_exerceise/coffee_shops.csv'
    }
  }
}