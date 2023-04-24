const axios = require("axios");
const { expect } = require("chai");
const {faker} = require("@faker-js/faker")
var propertiesReader = require("properties-reader")
var properties = propertiesReader("config/env.properties")

describe("POST API Request Tests", async() => {
       it("should be able to post user details", async() => {
        const randomName = faker.name.firstName();
        const randomJobTitle = faker.name.jobTitle();

        const res = await axios.post(properties.get("baseUri") + '/users',
        {
            "name": randomName,
            "job": randomJobTitle
        })
        console.log(res.data);
        expect(res.data.name).equal(randomName)
        expect(res.data.job).equal(randomJobTitle)
       })
})