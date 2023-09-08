const Services = () => {
    return ( 
        <>
        <div className="serVcs">
            <div className="services bg-black p-5">
                <h2 className="text-white text-center" id="services">Services</h2>
                <p className="quotes text-center">Lorem ipsum dolor sit amet. Et autem reiciendis aut repellat excepturi</p>
                <br/><br/><br/>
                <div className="container">
                    <div className="row g-4">
                    <div className="col-4">
                        <div className="card">
                        <div className="card-body">
                            <div className="card-title">
                            <h3 className="text-center">Web Design</h3>
                            </div>
                            <div className="card-text">
                            <p className="text-center">Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; user interface design; authoring, including standardised code and proprietary software; user... </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                        <div className="card-body">
                            <div className="card-title">
                            <h3 className="text-center">e-Commerce Website Development</h3>
                            </div>
                            <div className="card-text">
                            <p className="text-center">The process of developing the technical aspects of your ecommerce website — how it functions, accepts payments, behaves in response to user action and appears aesthetically. </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                        <div className="card-body">
                            <div className="card-title">
                            <h3 className="text-center">Website Maintenance</h3>
                            </div>
                            <div className="card-text">
                            <p className="text-center">The process of keeping a website up-to-date and running smoothly as well as performing optimally. Website maintenance includes tasks like ensuring all the links on your site are working, regularly updating... </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Services;