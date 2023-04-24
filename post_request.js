const axios = require("axios");
const { expect } = require("chai");
const {faker} = require("@faker-js/faker")
var propertiesReader = require("properties-reader")
var properties = propertiesReader("config/env.properties")

describe("POST API Request Tests", async() => {
       it("should be able to post user details", async() => {
        const studentName = faker.name.firstName();
        const studentJobTitle = faker.name.jobTitle();

        const result = await axios.post(properties.get("baseUri") + '/users',
        {
            "name": studentName,
            "job": studentJobTitle
        })
        console.log(result.data);
        expect(result.data.name).equal(studentName)
        expect(result.data.job).equal(studentJobTitle)
       })
})