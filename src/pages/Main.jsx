import React, { useState } from 'react'
// const getData = async () => {
//     const res = await axios.get('https://geolocation-db.com/json/')
//     setIP(res.data.IPv4)
//     setCounterCode(res.data.country_code)
//     setCounterName(res.data.country_name)
//   }
const Main = ({ tests }) => {
  console.log(tests.length);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (event) => {
        const value = event.target.value;
       await setSearchTerm(value);

        const results = await tests.filter((test) =>
            test.savol.toLowerCase().includes(value.toLowerCase())
        );
        await   setSearchResults(results);
        setTimeout(()=>{
            setSearchTerm("")
        },3000)
    };

    return (
        <React.Fragment>
            <header className="header_top">
                <div className="container">
                    <div className="row  mt-5 justify-content-center">
                        <div className="col-auto">
                            <h1>SEARCH</h1>
                            <span>{tests.length} dona</span>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 ">
                            <input
                                type="text"
                                placeholder="Savolni qidiring..."
                                value={searchTerm}
                                onChange={handleSearch}
                                className="form-control form-control-lg"
                                aria-label=".form-control-lg example"
                            />
                        </div>

                    </div>
                    <div className="row mt-4 justify-content-center">
                        <div className="col-lg-8">
                            <div className="box p-2">
                                {
                                    
                                        searchResults.map((result, index) => (
                                            <div key={index}>
                                                <h2>savol:{result.savol}</h2>
                                                <h3>Javob:{result.javob}</h3>
                                            </div>
                                        ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Main