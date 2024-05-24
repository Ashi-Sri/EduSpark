import React from "react";
import { useLocation } from "react-router-dom";

const CoursesPreview = () => {
    const location = useLocation();
    let course = location.state.course;

    return (
        <div className="container mt-5">
            <div className="row mt-5">
                <div className="col-md-12 ">
                    <h1 className="my-5 text-center fw-bold">{course.title}</h1>
                    <img src={course.image} alt="" height={300} />
                    <p className="p-2 text-dark fw-light my-4">
                        {course.description}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Itaque nobis amet, eos dolor repudiandae est accusantium
                        veritatis adipisci dolore doloribus aperiam, dolorum
                        porro pariatur placeat odio rerum! Repellat fugiat
                        itaque aliquid, vero vel dolor! Odio soluta
                        necessitatibus, quas quibusdam nobis consectetur dolore
                        saepe provident perspiciatis perferendis doloribus
                        impedit nihil cumque ratione doloremque laborum,
                        quisquam error. Rem aliquid distinctio sapiente totam
                        vel necessitatibus aut quisquam nulla eligendi non iusto
                        tenetur iure reiciendis libero, corrupti nostrum saepe
                        quas qui nobis quasi, autem veritatis quos recusandae.
                        Beatae, dolorum harum asperiores, omnis nesciunt nostrum
                        aperiam laboriosam alias, sit incidunt ipsam at aliquid
                        nam quod?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CoursesPreview;
