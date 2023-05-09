import "./contact.css";

export default function Contact() {
  return (
    <div className=" h-screen bg-color-base flex flex-col gap-10 pt-20 justify-center items-center">
      <h2 className=" text-6xl font-bold text-center">
        Contactate <span className=" text-btn2-color">Conmigo!</span>
      </h2>
      <form className="">
        <div>
          <div className="">
            <input type="text" placeholder="full name" required />
            <span className=""></span>
          </div>
          <div>
            <input type="text" placeholder="Email Address" required />
            <span className=""></span>
          </div>
        </div>
        <div>
          <div className="">
            <input type="number" placeholder="Mobile Number" required />
            <span className=""></span>
          </div>
          <div>
            <input type="text" placeholder="Email Subject" required />
            <span className=""></span>
          </div>
        </div>

        <div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <span className=""></span>
        </div>
        <div>
          <button
            type="submit"
            className="btn cursor-pointer relative inline-flex justify-center items-center w-wid-btn2 h h-hei-btn bg-btn2-color  font-semibold text-xl tracking-widest text-color-base"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
