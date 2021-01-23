import { Request, Response } from 'express';
import faker from 'faker';

export default {
    async index(request: Request, response: Response) {
        
        const checkIfItsAnObject = (param: any) => {
            return typeof (param) === "object" ? true : false;
        };

        const runners = {
            address_zipCode: faker.address.zipCode(),
            address_city: faker.address.city(),
            address_cityPrefix: faker.address.cityPrefix(),
            address_citySuffix: faker.address.citySuffix(),
            address_streetName: faker.address.streetName(),
            address_streetAddress: faker.address.streetAddress(),
            address_streetSuffix: faker.address.streetSuffix(),
            address_streetPrefix: faker.address.streetPrefix(),
            address_secondaryAddress: faker.address.secondaryAddress(),
            address_county: faker.address.county(),
            address_country: faker.address.country(),
            address_countryCode: faker.address.countryCode(),
            address_state: faker.address.state(),
            address_stateAbbr: faker.address.stateAbbr(),
            address_latitude: faker.address.latitude(),
            address_longitude: faker.address.longitude(),
            address_direction: faker.address.direction(),
            address_cardinalDirection: faker.address.cardinalDirection(),
            address_ordinalDirection: faker.address.ordinalDirection(),
            address_nearbyGPSCoordinate: faker.address.nearbyGPSCoordinate(),
            address_timeZone: faker.address.timeZone(),
            commerce_color: faker.commerce.color(),
            commerce_department: faker.commerce.department(),
            commerce_productName: faker.commerce.productName(),
            commerce_price: faker.commerce.price(),
            commerce_productAdjective: faker.commerce.productAdjective(),
            commerce_productMaterial: faker.commerce.productMaterial(),
            commerce_product: faker.commerce.product(),
            commerce_productDescription: faker.commerce.productDescription(),
            company_suffixes: faker.company.suffixes(),
            company_companyName: faker.company.companyName(),
            company_companySuffix: faker.company.companySuffix(),
            company_catchPhrase: faker.company.catchPhrase(),
            company_bs: faker.company.bs(),
            company_catchPhraseAdjective: faker.company.catchPhraseAdjective(),
            company_catchPhraseDescriptor: faker.company.catchPhraseDescriptor(),
            company_catchPhraseNoun: faker.company.catchPhraseNoun(),
            company_bsAdjective: faker.company.bsAdjective(),
            company_bsBuzz: faker.company.bsBuzz(),
            company_bsNoun: faker.company.bsNoun(),
            database_column: faker.database.column(),
            database_type: faker.database.type(),
            database_collation: faker.database.collation(),
            database_engine: faker.database.engine(),
            date_past: faker.date.past(),
            date_future: faker.date.future(),
            date_recent: faker.date.recent(),
            date_soon: faker.date.soon(),
            date_month: faker.date.month(),
            date_weekday: faker.date.weekday(),
            finance_account: faker.finance.account(),
            finance_accountName: faker.finance.accountName(),
            finance_routingNumber: faker.finance.routingNumber(),
            finance_mask: faker.finance.mask(),
            finance_amount: faker.finance.amount(),
            finance_transactionType: faker.finance.transactionType(),
            finance_currencyCode: faker.finance.currencyCode(),
            finance_currencyName: faker.finance.currencyName(),
            finance_currencySymbol: faker.finance.currencySymbol(),
            finance_bitcoinAddress: faker.finance.bitcoinAddress(),
            finance_litecoinAddress: faker.finance.litecoinAddress(),
            finance_creditCardNumber: faker.finance.creditCardNumber(),
            finance_creditCardCVV: faker.finance.creditCardCVV(),
            finance_ethereumAddress: faker.finance.ethereumAddress(),
            finance_iban: faker.finance.iban(),
            finance_bic: faker.finance.bic(),
            finance_transactionDescription: faker.finance.transactionDescription(),
            git_branch: faker.git.branch(),
            git_commitEntry: faker.git.commitEntry(),
            git_commitMessage: faker.git.commitMessage(),
            git_commitSha: faker.git.commitSha(),
            git_shortSha: faker.git.shortSha(),
            hacker_abbreviation: faker.hacker.abbreviation(),
            hacker_adjective: faker.hacker.adjective(),
            hacker_noun: faker.hacker.noun(),
            hacker_verb: faker.hacker.verb(),
            hacker_ingverb: faker.hacker.ingverb(),
            hacker_phrase: faker.hacker.phrase(),
            helpers_randomize: faker.helpers.randomize(),
            helpers_slugify: faker.helpers.slugify(),
            helpers_replaceSymbolWithNumber: faker.helpers.replaceSymbolWithNumber(),
            helpers_replaceSymbols: faker.helpers.replaceSymbols(),
            helpers_replaceCreditCardSymbols: faker.helpers.replaceCreditCardSymbols(),
            helpers_shuffle: faker.helpers.shuffle(),
            helpers_createCard: faker.helpers.createCard(),
            helpers_contextualCard: faker.helpers.contextualCard(),
            helpers_userCard: faker.helpers.userCard(),
            helpers_createTransaction: faker.helpers.createTransaction(),
            image_image: faker.image.image(),
            image_avatar: faker.image.avatar(),
            image_imageUrl: faker.image.imageUrl(),
            image_abstract: faker.image.abstract(),
            image_animals: faker.image.animals(),
            image_business: faker.image.business(),
            image_cats: faker.image.cats(),
            image_city: faker.image.city(),
            image_food: faker.image.food(),
            image_nightlife: faker.image.nightlife(),
            image_fashion: faker.image.fashion(),
            image_people: faker.image.people(),
            image_nature: faker.image.nature(),
            image_sports: faker.image.sports(),
            image_technics: faker.image.technics(),
            image_transport: faker.image.transport(),
            image_dataUri: faker.image.dataUri(),
            internet_avatar: faker.internet.avatar(),
            internet_email: faker.internet.email(),
            internet_exampleEmail: faker.internet.exampleEmail(),
            internet_userName: faker.internet.userName(),
            internet_protocol: faker.internet.protocol(),
            internet_url: faker.internet.url(),
            internet_domainName: faker.internet.domainName(),
            internet_domainSuffix: faker.internet.domainSuffix(),
            internet_domainWord: faker.internet.domainWord(),
            internet_ip: faker.internet.ip(),
            internet_ipv6: faker.internet.ipv6(),
            internet_userAgent: faker.internet.userAgent(),
            internet_color: faker.internet.color(),
            internet_mac: faker.internet.mac(),
            internet_password: faker.internet.password(),
            lorem_word: faker.lorem.word(),
            lorem_words: faker.lorem.words(),
            lorem_sentence: faker.lorem.sentence(),
            lorem_slug: faker.lorem.slug(),
            lorem_sentences: faker.lorem.sentences(),
            lorem_paragraph: faker.lorem.paragraph(),
            lorem_paragraphs: faker.lorem.paragraphs(),
            lorem_text: faker.lorem.text(),
            lorem_lines: faker.lorem.lines(),
            name_firstName: faker.name.firstName(),
            name_lastName: faker.name.lastName(),
            name_findName: faker.name.findName(),
            name_jobTitle: faker.name.jobTitle(),
            name_prefix: faker.name.prefix(),
            name_suffix: faker.name.suffix(),
            name_title: faker.name.title(),
            name_jobDescriptor: faker.name.jobDescriptor(),
            name_jobArea: faker.name.jobArea(),
            name_jobType: faker.name.jobType(),
            phone_phoneNumber: faker.phone.phoneNumber(),
            phone_phoneNumberFormat: faker.phone.phoneNumberFormat(),
            phone_phoneFormats: faker.phone.phoneFormats(),
            random_number: faker.random.number(),
            random_float: faker.random.float(),
            random_arrayElement: faker.random.arrayElement(),
            random_arrayElements: faker.random.arrayElements(),
            random_objectElement: faker.random.objectElement(),
            random_uuid: faker.random.uuid(),
            random_boolean: faker.random.boolean(),
            random_word: faker.random.word(),
            random_words: faker.random.words(),
            random_image: faker.random.image(),
            random_locale: faker.random.locale(),
            random_alpha: faker.random.alpha(),
            random_alphaNumeric: faker.random.alphaNumeric(),
            random_hexaDecimal: faker.random.hexaDecimal(),
            system_fileName: faker.system.fileName(),
            system_mimeType: faker.system.mimeType(),
            system_commonFileType: faker.system.commonFileType(),
            system_commonFileExt: faker.system.commonFileExt(),
            system_fileType: faker.system.fileType(),
            system_directoryPath: faker.system.directoryPath(),
            system_filePath: faker.system.filePath(),
            system_semver: faker.system.semver(),
            time_recent: faker.time.recent(),
            vehicle_vehicle: faker.vehicle.vehicle(),
            vehicle_manufacturer: faker.vehicle.manufacturer(),
            vehicle_model: faker.vehicle.model(),
            vehicle_type: faker.vehicle.type(),
            vehicle_fuel: faker.vehicle.fuel(),
            vehicle_vin: faker.vehicle.vin(),
            vehicle_color: faker.vehicle.color(),
        }

        if (checkIfItsAnObject(request.body) === true) {
            var string = request.body;
            string = JSON.stringify(string);
            
            for (var key in runners) {
                if (string.includes(key)) {
                    var replaceKey = new RegExp(key, "g");
                    if (checkIfItsAnObject(runners[key]) === true) {
                        string = string.replace(replaceKey, JSON.stringify(runners[key]))
                    } else {
                        string = string.replace(replaceKey, runners[key])
                    }
                }
            }

            if(string.includes(":\"{\"")) {
                string = string.replace(/:\"{"/g, ":{\"")
            }
            if(string.includes("\}")) {
                string = string.replace(/\}"/g, "\}")
            }
            if(string.includes("\"\"")) {
                string = string.replace(/\"\"/g, "\"")
            }

            string = JSON.parse(string)
        }

        return response.status(200).json(string);
    }
}