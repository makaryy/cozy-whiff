import React from "react";
import "../App.css";
import item1 from "../images/item1.jpg";
import item2 from "../images/item2.jpg";
import item3 from "../images/item3.jpg";
import item4 from "../images/item4.jpg";
import Item from "./Item";

function Products() {
    const items = [
        {
            title: "Blooming Forest",
            desc: "to otulający i delikatny, ale zarazem intensywny bukiet aromatów, które przywołują wspomnienie wakacji na wsi w otoczeniu słonecznych łąk i lasu. Lekka, a zarazem słodka kompozycja zapachu świeżo skoszonej trawy, wzbogacona o subtelne nuty białych kwiatów i ciepłe akordy leśnego mchu.",
            image: item1,
            url: "https://www.etsy.com/pl/listing/1054742998/soy-candle-cozy-whiff-no-1-blooming?ref=shop_home_feat_2&frs=1"
        },
        {
            title: "Pinka",
            desc: "to orzeźwiające połączenie kwaskowatej słodyczy świeżo zebranych owoców grapefruita, arbuza, mango i mandarynki z nutami kwiatowymi. Wzbogacone odrobiną czerwonej porzeczki nadają lekkości i subtelności zapachowi, który przywołuje we wspomnieniach błogie wakacyjne chwile, pełne relaksu i odpoczynku.",
            image: item2,
            url: "https://www.etsy.com/pl/listing/1054743424/soy-candle-cozy-whiff-no-2-pinka?ref=shop_home_feat_3&frs=1"
        },
        {
            title: "Dark Bohemia",
            desc: "to wytrawna i ziemista kompozycja. Przywołująca na myśl ciepłe, męskie perfumy. W głównych akordach znajdziemy skórę, rozmaryn i paczulę. Nuta stokrotki dodaje kompozycji subtelnej słodkości, która idealnie wprowadzi nas w spokój i ciszę jesiennych wieczorów.",
            image: item3,
            url: "https://www.etsy.com/pl/listing/1068702373/soy-candle-cozy-whiff-no-3-dark-bohemia?ref=shop_home_feat_4&frs=1"
        },
        {
            title: "Seasonal Autumn",
            desc: "to typowo jesienny zapach. Wyobraź sobie najmilsze wspomnienia wczesnojesiennych wieczorów. Intensywnie akordy palonego drewna, aromatyczne przyprawy korzenne z nutami owocowymi pomarańczy i śliwki. Umilą czas skracających się dni, nadchodzących długich wieczorów i przywołają momenty spędzone przy ognisku w gronie przyjaciół, pośród zapachu palonego drewna, żywicznego dymu i aromatycznego grzańca.",
            image: item4,
            url: "https://www.etsy.com/pl/listing/1077593920/soy-candle-cozy-whiff-seasonal-autumn?ref=shop_home_feat_1&frs=1"
        }
        // {title: ,
        //     desc: ,
        //     image: ''},
        // {title: ,
        //     desc: ,
        //     image: ''},
        // {title: ,
        //     desc: ,
        //     image: ''}
    ];
    return (
        <div className="products" id="products">
            {items.map((item, key) => {
                return (
                    <Item
                        key={key}
                        title={item.title}
                        desc={item.desc}
                        image={item.image}
                        imageOnRight={key % 2 === 0 ? true : false}
                        url={item.url}
                    />
                );
            })}
        </div>
    );
}

export default Products;
