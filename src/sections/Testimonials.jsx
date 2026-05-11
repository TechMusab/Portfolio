
import { testimonials } from "../constants";
import Glow from "../components/Glow";

const Testimonials = () => {
  return (
    <section id="awards" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <div className="max-w-3xl mx-auto mt-16">
          {testimonials.map((testimonial, index) => (
            <Glow card={testimonial} key={index} index={index}>
              <div>
                <p className="font-bold text-xl">{testimonial.name}</p>
                <p className="text-white-50 mt-2">{testimonial.mentions}</p>
              </div>
            </Glow>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
