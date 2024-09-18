import React from 'react';
import PageBanner from '../components/common/PageBanner';

const pageData = {
	banner: {
		title: "Mentions légales",
		pageName: "Mentions légales",
		bgImage: "",
	},
};

const TermsCondition = () => {
  return (
    <>
      <PageBanner data={pageData.banner} type="style2" />
      <section className='faq-wrap pt-100 pb-100'>
        <div className='container'>
          <div className='row gx-5'>
            <div className='col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 col-md-12 col-12'>
              <div className='pp-content-wrap'>
              <div className='pp-content'>                  
              <h2 className="text-center">MENTIONS LÉGALES </h2>

                  <p>
                  Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site Inoqare l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.



                  </p>                  

                </div>

                <div className='pp-content'>
                  <h4>Edition du site </h4>
                  <p>
                  Le présent site, accessible à l’URL www.inoqare.com (le « Site »), est édité par :

Inoqare, société au capital de 500 euros, inscrite au R.C.S. Bobigny sous le numéro 980 324 511, dont le siège social est situé au 45 PL NICOLE NEUBURGER 93140 BONDY, représenté(e) par Boubou Sacko dûment habilité(e)

Le numéro individuel TVA de l’éditeur est : FR87980324511.

                  </p>
                </div>
                <div className='pp-content'>
                  <h4>Hébergement
</h4>
                  <p>
                  Le Site est hébergé par la société Digital Ocean, situé 101 Avenue of the Americas, 10th Floor, New York, NY 10013 USA, (contact téléphonique ou email : +18888906714).

                  </p>
                  
                </div>
                <div className='pp-content'>
                  <h4>Directeur de publication </h4>
                  <p>
                  Le Directeur de la publication du Site est Boubou Sacko .

                  </p>
                </div>
                <div className='pp-content'>
                  <h4>Nous contacter 
</h4>
                  <p>
                  Par téléphone : +33180839483
Par email : contact@inoqare.com
Par courrier : 45 PLACE NICOLE NEUBURGER, 93140 BONDY FRANCE


                  </p>
                </div>

                <div className='pp-content'>
                  <h4>Données personnelles
</h4>
                  <p>
                  Le traitement de vos données à caractère personnel est régi par notre Charte du respect de la vie privée, disponible depuis la section "Charte de Protection des Données Personnelles", conformément au Règlement Général sur la Protection des Données 2016/679 du 27 avril 2016 («RGPD»).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsCondition;
