import { Paper, Typography } from "@mui/material";
import React from "react";
import aboutImage1 from "../images/about-image1.jpg";
import aboutImage2 from "../images/about-image2.jpg";

function About() {
    return (
        <Paper className="about" elevation={10}>
            <Typography variant="body1" color="secondary" sx={{}}>
                <img src={aboutImage1} alt="" className="aboutImage1" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                nec ullamcorper eros. Etiam sagittis elit ut lacus sollicitudin
                dignissim. Phasellus vitae cursus lectus. Cras pretium in nulla
                non accumsan. Ut consequat dui ligula, ut laoreet ipsum finibus
                id. In et magna blandit, congue turpis id, facilisis lectus.
                Suspendisse ut tristique ipsum. Proin nec vehicula neque, vitae
                porttitor est. Morbi fermentum eleifend diam sit amet pharetra.
                In hac habitasse platea dictumst. Donec porttitor pulvinar dui.
                Aliquam in libero urna. Etiam ligula turpis, euismod eget semper
                id, consectetur sit amet diam. Pellentesque eget massa ut dui
                mattis viverra in id nulla. In hac habitasse platea dictumst.
                Phasellus sollicitudin felis sem, ac ullamcorper justo hendrerit
                quis. Ut ut augue vitae tellus molestie fermentum a viverra
                lorem. Maecenas et viverra leo. Donec dictum sapien nec enim
                placerat, scelerisque dapibus mauris euismod. Mauris tristique
                blandit nisl. Ut in volutpat libero. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Maecenas dignissim efficitur euismod. Sed sit amet
                sollicitudin quam. Nam tortor libero, bibendum non consequat
                non, facilisis eu massa. Aenean sagittis posuere vestibulum.
                Suspendisse sed dignissim elit. Pellentesque nibh risus, ornare
                sed metus in, maximus tempor quam. Sed eu sem pharetra, viverra
                sapien vel, consequat dui. Vestibulum vitae velit ut dolor
                aliquet varius at sed diam. Quisque malesuada metus turpis, nec
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                nec ullamcorper eros. Etiam sagittis elit ut lacus sollicitudin
                dignissim. Phasellus vitae cursus lectus. Cras pretium in nulla
                non accumsan. Ut consequat dui ligula, ut laoreet ipsum finibus
                id. In et magna blandit, congue turpis id, facilisis lectus.
                Suspendisse ut tristique ipsum. Proin nec vehicula neque, vitae
                porttitor est. Morbi fermentum eleifend diam sit amet pharetra.
                In hac habitasse platea dictumst. Donec porttitor pulvinar dui.
                Alibulum. Suspendisse sed dignissim elit. Pellentesque nibh
                risus, ornare sed metus in, maximus tempor quam. Sed eu sem
                pharetra, viverra sapien vel, consequat dui. Vestibulum vitae
                velit ut dolor aliquet varius at sed diam. Quisque malesuada
                metus turpis, nec Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Vivamus nec ullamcorper eros. Etiam sagittis
                elit ut lacus sollicitudin dignissim. Phasellus vitae cursus
                <img src={aboutImage2} alt="" className="aboutImage2" />
                lectus. Cras pretium in nulla non accumsan. Ut consequat dui
                ligula, ut laoreet ipsum finibus id. In et magna blandit, congue
                turpis id, facilisis lectus. Suspendisse ut tristique ipsum.
                Proin nec vehicula neque, vitae porttitor est. Morbi fermentum
                eleifend diam sit amet pharetra. In hac habitasse platea
                dictumst. Donec porttitor pulvinar dui. Aliquam in libero urna.
                Etiam ligula turpis, euismod eget semper id, consectetur sit
                amet diam. Pellentesque eget massa ut dui mattis viverra in id
                nulla. In hac habitasse platea dictumst. Phasellus sollicitudin
                felis sem, ac ullamcorper justo hendrerit quis. Ut ut augue
                vitae tellus molestie fermentum a viverra lorem. Maecenas et
                viverra leo. Donec dictum sapien nec enim placerat, scelerisque
                dapibus mauris euismod. Mauris tristique blandit nisl. Ut in
                volutpat libero. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Maecenas dignissim
                efficitur euismod. Sed sit amet sollicitudin quam. Nam tortor
                libero, bibendum non consequat non, facilisis eu massa. Aenean
                sagittis posuere vestibulum. Suspendisse sed dignissim elit.
                Pellentesque nibh risus, ornare sed metus in, maximus tempor
                quam. Sed eu sem pharetra, viverra sapien vel, consequat dui.
                Vestibulum vitae velit ut dolor aliquet varius at sed diam.
                Quisque malesuada metus turpis, nec
            </Typography>
        </Paper>
    );
}

export default About;
