import Marquee from "react-fast-marquee";

const BrakingNews = () => {
      return (
            <div className="flex my-6">
                  <button className="btn btn-secondary">BrakingNews </button>
                  <Marquee>
                        I can be a React component, multiple React components, or just some text.
                  </Marquee>
            </div>
      );
};

export default BrakingNews;