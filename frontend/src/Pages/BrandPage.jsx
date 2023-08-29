import { useState, useEffect } from "react";
import "../Fonts/InterFonts/inter.css";
import styles from "./BrandPage.module.css";
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Components/Banner/Banner";
import Card from "../Components/Card/Card";
import Footer from "../Components/Footer/Footer";

import { useQuery } from "@tanstack/react-query";

const BrandPage = () => {
  const {
    data: brandData,
    isLoading,
    error,
  } = useQuery(["brands"], async () => {
    const response = await fetch(`http://localhost:2500/api/v1/brands`);
    const data = await response.json();
    return data;
  });

  const brandImages = require.context(
    "../Assets/Images/Brands",
    false,
    /\.(png|jpg|jpeg|gif)$/
  );

  const [sortedData, setSortedData] = useState([]);
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    if (brandData?.data) {
      setSortedData(brandData.data);
    }
  }, [brandData]);

  const handleSort = () => {
    const sorted = [...sortedData].sort((a, b) =>
      isAscending
        ? a.company_name.localeCompare(b.company_name)
        : b.company_name.localeCompare(a.company_name)
    );
    setSortedData(sorted);
    setIsAscending(!isAscending);
  };

  return (
    <div className={styles.brandpage}>
      <Navbar />
      <div className={styles.imageSection}>
        <Banner />
      </div>
      <div className={styles.section} id="services">
        <div className={styles.line}>What we do</div>
        <h1 className={styles.caption}>
          We offer a complete range of Bespoke design and development services
          to help you turn ideas into digital masterpieces
        </h1>
        <div className={styles.cardContainer}>
          <Card
            badgeText="Card Badge"
            title="Web Development"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda omnis error rerum! Vitae maxime a eligendi quidem ipsam, corrupti, fuga hic fugit voluptatum quisquam non impedit perferendis adipisci enim voluptas?"
          />
          <Card
            badgeText="Card Badge"
            title="User Experience and design"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda omnis error rerum! Vitae maxime a eligendi quidem ipsam, corrupti, fuga hic fugit voluptatum quisquam non impedit perferendis adipisci enim voluptas?"
          />
          <Card
            badgeText="Card Badge"
            title="Mobile Development"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda omnis error rerum! Vitae maxime a eligendi quidem ipsam, corrupti, fuga hic fugit voluptatum quisquam non impedit perferendis adipisci enim voluptas?"
          />
          <Card
            badgeText="Card Badge"
            title="Blockchain Solutions"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda omnis error rerum! Vitae maxime a eligendi quidem ipsam, corrupti, fuga hic fugit voluptatum quisquam non impedit perferendis adipisci enim voluptas?"
          />
        </div>
      </div>
      <div className={styles.section} id="cases">
        <div className={styles.line}>Case studies</div>
        <div className={styles.cardContainer}>
          <Card
            title="The Olympian"
            image={require("../Assets/Images/CaseStudies/olympic.jpg")}
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda omnis error rerum! Vitae maxime a eligendi quidem ipsam, corrupti, fuga hic fugit voluptatum quisquam non impedit perferendis adipisci enim voluptas?"
          />
          <Card
            title="The savings jar"
            image={require("../Assets/Images/CaseStudies/savings.jpg")}
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda omnis error rerum! Vitae maxime a eligendi quidem ipsam, corrupti, fuga hic fugit voluptatum quisquam non impedit perferendis adipisci enim voluptas?"
          />
          <Card
            title="Skhokho seMali"
            image={require("../Assets/Images/CaseStudies/skhokho.jpg")}
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda omnis error rerum! Vitae maxime a eligendi quidem ipsam, corrupti, fuga hic fugit voluptatum quisquam non impedit perferendis adipisci enim voluptas?"
          />
        </div>
      </div>
      <div className={styles.section} id="industry">
      <button onClick={handleSort} className={styles.button}>Sort</button>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <div className={styles.brandContainer}>
            {console.log(sortedData)}
            {sortedData.map((brand) => (
              <div className={styles.brand} key={brand.id}>
                <img
                  src={brandImages(`./${brand.company_name}.png`)}
                  alt={brand.company_name}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BrandPage;
