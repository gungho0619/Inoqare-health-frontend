import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRouter } from "next/router";
import Image from 'next/image';
import Link from 'next/link';

function HeroSection({data}) {
  const router = useRouter();

  const { pathname } = router;

  return (
    <section className="section position-relative pad20" id="hero">
    <Container>
      <Row className="align-items-center">
        <Col lg={6}>
          <div className="pr-lg-5">
            <h1 className="mb-4 font-weight-normal line-height-1_4">{data.title_part1} <span className="text-primary font-weight-medium">{data.title_part2}</span></h1>
            <p className="text-muted mb-4 pb-2 new-line">{data.text.split("<br/>").join("\n")}</p>            
            {pathname === "/solutions/hair-transplant" && 
                <Link href="/price-plan/hair">
                    <a className="btn v3">
                    {data.title_btn} <span className="ml-2 right-icon">&#8594;</span>
                    </a>
                </Link>
            }
            {pathname === "/fr/solutions/greffe-cheveux" && 
                <Link href="/price-plan/cheveux">
                    <a className="btn v3">
                    {data.title_btn} <span className="ml-2 right-icon">&#8594;</span>
                    </a>
                </Link>
            }
            {pathname === "/solutions/dental" && 
                <Link href="/price-plan/dental">
                    <a className="btn v3">
                    {data.title_btn} <span className="ml-2 right-icon">&#8594;</span>
                    </a>
                </Link>
            }
            {pathname === "/solutions/gastric" && 
                <Link href="/price-plan/gastric">
                    <a className="btn v3">
                    {data.title_btn} <span className="ml-2 right-icon">&#8594;</span>
                    </a>
                </Link>
            }
          </div>
        </Col>
        <Col lg={6}>
          <div className="mt-5 mt-lg-0">
            <img src={data.img_hero} alt="" className="img-fluid mx-auto d-block feature-tour-card style1 feature-tour-img"/>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  );
}

export default HeroSection;
