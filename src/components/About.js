import React from "react";

const About = () => {
  //   const location = useLocation();

  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       navigate("/contact", { replace: true });
  //     }, 2000);

  //     return () => clearTimeout(timer);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  //   console.log(location);

  return (
    <div className="container mt-5 pt-5">
      <h3>About</h3>
      <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.{" "}
      </p>
      <p>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.
      </p>
    </div>
  );
};

export default About;
