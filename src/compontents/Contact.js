import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
    return ( 
        <>
            <div className="hero">
                <form>
                    <h2 className="text-center text-white" id="contact">CONTACT</h2>
                    <p className="quotes text-center">Let's Start a Conversation</p>
                    <br/><br/>
                    <div className="row">
                        <div className="input-group">
                            <input type="text" id="name" required />
                            <label for="name"> First Name</label>
                        </div>
                        <div className="input-group">
                            <input type="text" id="name" required />
                            <label for="name"> Last Name</label>
                        </div>
                    </div>
                    <div className="input-group-2">
                        <input type="email" id="email" required />
                        <label for="email">Email</label>
                    </div>
                    <div className="input-group-2">
                        <textarea id="message" rows="8" placeholder="Message" required></textarea>
                        <label for="message"></label>
                    </div>
                    <button className="submit">SUBMIT</button>
                </form>
            </div>
        </>
     );
}
 
export default Contact;