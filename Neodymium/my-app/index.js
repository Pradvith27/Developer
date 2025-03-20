import axios from "axios";
const url = "http://localhost:3001";
async function makeRequests() {
    quests();
    {
        try {
            // 1. GET /generate
            const generate = await axios.get(`${url}/generate`);
            await axios.get(`${url}/generate`);
            console.log(generate.data);
            ate.data;
            ;
            // 2. GET /current-time    // 2. GET /current-time
            const currentTime = await axios.get(`${url}/current-time`);
            ent - time `);
    console.log(currentTime.data);ata);

    // 3. GET /environment
    const environment = await axios.get(`;
            $;
            {
                url;
            }
            /environment`);ios.get(`${url}/environment `);
    console.log(environment.data);    console.log(environment.data);

    // 4. GET /puppet
    const puppet = await axios.get(`;
            $;
            {
                url;
            }
            /puppet`);    const puppet = await axios.get(`${url}/puppet `);
    console.log(puppet.data);

    // 5. GET /numbers    // 5. GET /numbers
    const numbers = await axios.get(`;
            $;
            {
                url;
            }
            /numbers`;
            ;
            s `);
    console.log(numbers.data););

    // 6. POST /numbers
    const postNumbers = await axios.post(`;
            $;
            {
                url;
            }
            /numbers`, { axios.post(`${url}/numbers `, {
      numbers: [1, 2, 4, 4, 5], numbers: [1, 2, 4, 4, 5],
    });
    console.log(postNumbers.data);    console.log(postNumbers.data);

    // 7. GET /numbers after POST
    const postedNumbers = await axios.get(`;
            $;
            {
                url;
            }
            /numbers`);    const postedNumbers = await axios.get(`${url}/numbers `);
    console.log('posted numbers', postedNumbers.data);og('posted numbers', postedNumbers.data);

  } catch (e) { } catch (e) {





makeRequests();}  }    console.log("Error: ", e);    console.log("Error: ", e);
  }
}

makeRequests();;
        }
        finally { }
    }
}
