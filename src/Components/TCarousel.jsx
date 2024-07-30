import TCard from "./TCard";
import Marquee from "react-fast-marquee";

function TCarousel() {
    return(
        <Marquee pauseOnHover="true">
            <TCard message="Lorem ipsum lorem lorem lorem" name="John" />
            <TCard message="Lorem ipsum lorem lorem lorem" name="John" />
            <TCard message="Lorem ipsum lorem lorem lorem" name="John" />
            <TCard message="Lorem ipsum lorem lorem lorem" name="John" />
            <TCard message="Lorem ipsum lorem lorem lorem" name="John" />
        </Marquee>
    );
}

export default TCarousel;