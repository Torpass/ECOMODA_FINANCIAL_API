import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.0",
  info: {
    title: "Ecmomoda financial api documentation",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:3000",
    },
  ],
  components: {
    schemas: {
      accounts:{
        type: "object",
        required: ["description"],
        properties: {
          id:{
            type: "number",
            },  
          description: {
            type: "string",
          },
          status: {
            type: "string",
          },
          createdAt:{
            type: "Date"
          },
          updatedAt:{
            type: "Date"
          }
        },
      },
      request:{
        type: "object",
        required: ["amount", "description"],
        properties: {
          id:{
            type: "number",
          },
          amount: {
            type: "number",
          },
          description: {
            type: "string",
          },
          user_id:{
            type: "number",
          },
          type_id:{
            type: "number",
          },
          date:{
            type: "Date",
          },
          status:{
            type: "string",
          }
        },
      },
      requestType:{
        type: "object",
        required: ["description", "status"],
        properties: {
          id:{
            type: "number",
          },
          description: {
            type: "string",
          },
          status: {
            type: "string",
          },
        },
      },
      financialRecord:{
        type: "object",
        required: ["type", "description", "amount", "account_id"],
        properties: {
          id:{
            type: "number",
          },
          type: {
            type: "string",
          },
          description: {
            type: "string",
          },
          amount: {
            type: "number",
          },
          account_id: {
            type: "number",
          },
          createdAt:{
            type: "Date",
          },
          updatedAt:{
            type: "Date",
          }
        },
        financialBackground:{
            type: "object",
            required: ["request_id", "financial_record_id"],
            properties: {
              request_id:{
                type: "number",
              },
              financial_record_id: {
                type: "number",
              },
            },
        }
      }
    },
  },
};

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ["./src/routes/*.ts"],
};

export default swaggerJSDoc(swaggerOptions);