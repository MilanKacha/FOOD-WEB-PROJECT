import React, { useState } from "react";
import Button from "./Button";
import ModalCommon from "./ModalCommon";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  const handleCloseButton = <Button onClick={closeModal}>Accept It</Button>;

  const mainModal = (
    <ModalCommon closeModal={closeModal} handleCloseButton={handleCloseButton}>
      <h2 style={{ color: "black" }}>Lorem ipsum dolor sit amet.</h2>
      <p style={{ color: "black" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum itaque
        ducimus facilis, quidem cum repellendus necessitatibus quis
        exercitationem sint alias!
      </p>
      {/* <Button onClick={closeModal}>Accept It</Button> */}
    </ModalCommon>
  );

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Open Modal</Button>
      {showModal && mainModal}
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel magni
        impedit pariatur officia, iure veritatis a deleniti amet molestiae
        asperiores aperiam numquam officiis laborum quae tempora iusto
        voluptatibus nostrum, harum eveniet dolorem provident similique
        delectus. Cum eius expedita maiores deserunt reprehenderit iusto rem
        ullam molestiae, quas cumque incidunt, velit non, sequi dolorum illum
        labore fugit odio numquam ab sed ea accusantium illo vitae. Dicta
        excepturi illo saepe perspiciatis magni a exercitationem vitae earum non
        iusto possimus vero omnis quas necessitatibus qui eveniet repellat
        molestiae, ut, rem assumenda ipsum nam aut atque maxime! Odio, esse
        vitae soluta suscipit facilis labore laudantium id aspernatur ad fugit
        impedit quasi, nemo porro assumenda saepe veritatis maxime deleniti! Nam
        ad id voluptatibus doloribus soluta eaque tenetur quibusdam eveniet
        deserunt debitis dolorum similique iusto, nulla est, excepturi dolores
        perferendis! Nihil enim odio voluptatem, delectus consequuntur
        necessitatibus quisquam? At tempora sit iste quibusdam aliquam dicta
        tenetur nulla magnam minus deserunt, commodi et consequuntur obcaecati
        laboriosam assumenda perferendis impedit rerum consequatur. Consequatur
        ab nemo officia minus asperiores quae cum veniam consectetur, non
        mollitia. Commodi enim eum molestiae quas sint fuga ea. Nesciunt tempora
        architecto quasi rerum cupiditate officia error, labore illo eos
        deserunt ratione delectus non nobis dolorum quos quae, vitae placeat
        molestiae sapiente! Facere magni neque velit reiciendis at molestiae
        obcaecati, dolores saepe nam tempora reprehenderit consequatur commodi
        odit, dicta minima, porro eligendi excepturi quae provident illo. Iure
        modi, ipsa nisi laudantium nulla voluptatum, voluptas, iste odit
        eligendi impedit voluptate facilis asperiores? Non eum iste, molestias
        facilis aperiam repudiandae dolorem eius ipsum veniam sed! Eaque optio
        quidem quibusdam voluptates veniam! Harum autem cupiditate laborum
        veniam fuga quos officia, incidunt explicabo velit laboriosam aliquam
        nostrum qui voluptatem sint, eos animi impedit praesentium at a labore
        repudiandae aut quaerat! Ipsa dolore quibusdam, ut, quidem reprehenderit
        corrupti magnam, molestiae similique est libero doloribus aspernatur?
        Maxime aspernatur quasi, totam exercitationem temporibus enim commodi
        quisquam vitae, perferendis id veniam dolorem expedita eius modi hic in
        reiciendis illo quod obcaecati, magni minus? Maiores, deleniti! Eaque
        sapiente, officiis, culpa suscipit praesentium possimus ex maiores
        deleniti vero sed accusantium officia impedit earum ea voluptatum, sequi
        veritatis alias numquam consequuntur facilis iste aliquam accusamus
        placeat nisi! Cupiditate excepturi minima voluptatibus pariatur
        voluptatum laborum aliquam quod nobis dicta ea doloribus mollitia
        perferendis eveniet incidunt, magnam sed facilis exercitationem earum
        eaque nihil temporibus tempora. Error ut voluptatum sint vitae itaque
        illum iusto veniam quas quis. Animi cum hic impedit alias, voluptatibus
        est minima similique ea cupiditate beatae, deserunt nesciunt quaerat
        porro voluptas iste provident fuga explicabo reiciendis facilis
        obcaecati, amet vel optio adipisci eum. Suscipit fugit minima temporibus
        maxime nobis harum ad pariatur ut dignissimos saepe repellat, ea
        laboriosam autem ipsa atque libero qui sit hic quia vero dicta corrupti
        aperiam! Corrupti ullam consectetur est possimus tempora dignissimos!
        Eveniet ullam nulla officiis animi, molestiae quasi doloremque quibusdam
        beatae accusantium quos? Voluptate, rem eos natus repellendus ab magni
        nisi minima ullam deserunt explicabo eaque mollitia vel magnam, quia
        ducimus provident? Sapiente non alias recusandae officia a nulla et
        ipsum?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
        iusto, similique, nam unde amet provident est nisi voluptatibus numquam
        asperiores laborum omnis, veniam praesentium quaerat porro eos vitae
        quibusdam cupiditate. Soluta natus reprehenderit id quidem? Distinctio,
        ut sapiente sit quis optio dolor ea voluptates molestias, minus
        molestiae aut laborum, quaerat debitis magnam rerum deleniti sed
        recusandae! Eum fugit officia hic maxime aperiam voluptatibus
        consequuntur odit, iusto recusandae accusamus dolor quia aut sunt a id
        veniam, dicta, totam dolorem ad dignissimos quidem quaerat? Hic officiis
        fuga laboriosam necessitatibus accusamus magni expedita eum laborum
        dolorem odit animi maiores dolor molestiae nam provident ipsa, similique
        cupiditate. Tenetur velit dolore harum neque pariatur facilis aspernatur
        id molestiae corporis? Aliquam minima error dignissimos non nisi
        repudiandae quia vel ipsam. Nisi voluptate iusto dolorem similique
        provident saepe laborum, dignissimos amet? Aut in dolore, porro ducimus,
        obcaecati corrupti dolorum ipsam ad et eum unde quod minima quae, modi
        quaerat doloremque inventore repellendus eaque quis architecto quas
        assumenda eveniet? Impedit quisquam odit iusto hic quibusdam animi
        veniam minima aspernatur obcaecati molestiae dolorem commodi officia,
        ullam nihil asperiores tempora sit, repellat placeat eum doloribus dolor
        eligendi atque deserunt vitae? Quisquam consequuntur quod sequi illo
        necessitatibus corporis iusto aperiam consectetur officia placeat ab
        corrupti natus aspernatur illum minus iure eaque unde rem, sed saepe.
        Quas, placeat sint, sed nostrum dolorem quisquam fugit rerum optio,
        consequatur omnis nihil animi aliquid temporibus eius accusamus
        inventore eos recusandae asperiores. Enim odit autem ipsa aut beatae
        nesciunt, impedit, repudiandae consectetur odio natus possimus
        excepturi. Dignissimos veniam soluta mollitia. Autem facere sapiente,
        maiores officia expedita, dignissimos optio ratione sint possimus
        voluptates, natus numquam aut? Illum nostrum voluptatum placeat alias
        blanditiis velit deserunt fugit iste, eaque doloribus obcaecati dolor
        illo architecto officiis? Est recusandae doloribus reiciendis dolorum
        tenetur quod quasi distinctio officia? Voluptate nihil placeat sapiente
        ullam ipsa! Quas eaque possimus officia eius laborum veritatis facilis
        eligendi tempore, modi aperiam illo dolorum eveniet aliquam veniam
        corporis, exercitationem nostrum! Tempore nihil repellendus architecto
        quos iure reiciendis soluta similique, praesentium cupiditate aliquid
        eligendi amet officiis! Tempora, neque quae. Ad autem voluptates natus
        corporis accusamus ex amet odit ipsum eius ipsam nostrum, deserunt rerum
        sunt beatae nam perferendis nobis saepe iste doloremque illum enim.
        Doloribus inventore, nulla, quod commodi dolor, dicta adipisci
        laboriosam mollitia dolorem doloremque aliquam neque consequatur
        distinctio quaerat rerum? Quaerat, atque? Obcaecati voluptatem
        praesentium vero repellendus doloremque veritatis inventore perferendis
        odio! Soluta possimus ducimus architecto quidem aperiam odio repellat
        magnam obcaecati excepturi! At vero aperiam dolore maiores cumque vel,
        sequi velit quia consectetur beatae, expedita ipsum tenetur quod
        repudiandae, numquam provident suscipit possimus. Exercitationem, nobis!
        Quas vitae reiciendis esse fugiat quos autem incidunt nobis voluptates
        quae impedit illum expedita quasi porro, nulla perferendis velit
        molestias quisquam placeat dolor? In nesciunt, illum fugit natus, minus
        odit delectus doloribus porro cumque voluptatum reprehenderit vitae
        consectetur iure mollitia incidunt nam! Eius molestias eum amet, unde
        ducimus illum dolores dolor nam cumque omnis laudantium explicabo! Modi,
        temporibus, excepturi dolorem aliquam ea dolorum aperiam ipsam vitae
        debitis sint quidem totam nesciunt?Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Tempora tenetur asperiores natus cumque
        aperiam deserunt rem ut fuga sunt mollitia quam quo consequuntur
        impedit, a ad iure! Accusamus quasi incidunt optio quam eius quis nihil,
        quas temporibus atque aliquam sequi ut eveniet adipisci placeat nobis
        earum ducimus ipsum amet soluta! Possimus, delectus? Ipsa doloremque
        laboriosam quod voluptatum excepturi impedit modi, dolorem, animi
        nesciunt voluptatibus ad, corporis laudantium magni culpa sed quam
        aspernatur hic. Ea iure maiores voluptates voluptas! Dolores veritatis
        corrupti eaque soluta quasi dolore hic delectus illum aspernatur ea aut,
        iure sint laborum eveniet qui voluptatum accusantium impedit dolorum
        temporibus itaque est sunt ex. Quas inventore ipsa obcaecati, possimus
        cumque accusamus corrupti aperiam ullam? Impedit reiciendis quas
        necessitatibus non nisi, nemo accusamus placeat? Dicta quasi mollitia
        ullam voluptatum facere tenetur vel quam, harum ducimus dolor, nostrum
        recusandae eius obcaecati doloribus, eum dolore inventore. Porro veniam
        error expedita minus rerum neque fugit perferendis enim corporis nihil,
        sequi reprehenderit optio numquam quos quaerat sint. Cumque rem, iure id
        nulla nobis mollitia, dolore quia ea quasi ut similique eos pariatur?
        Quam pariatur perferendis asperiores quis quas debitis nam ducimus rerum
        odio quod. Esse, reprehenderit nisi? Blanditiis modi illo quae excepturi
        vero architecto harum aut non illum totam unde tenetur ullam soluta,
        quidem iste odit eveniet a maxime atque corporis. Aliquid eius
        voluptates numquam, delectus placeat, debitis mollitia obcaecati harum
        sapiente animi aut ullam, laborum veritatis dolorum consequuntur amet
        natus laboriosam quibusdam. Asperiores reiciendis laudantium, quo optio
        aliquid unde quidem repellendus illum quisquam totam ipsam
        necessitatibus voluptatum dicta ipsa molestias temporibus accusamus
        consequatur in vel? Molestias vero, excepturi sequi ipsam vitae
        temporibus alias delectus? Cupiditate, amet quasi. Nulla obcaecati
        quibusdam ducimus nemo praesentium eius voluptatum alias harum.
        Perspiciatis corrupti, atque maxime natus, dolores molestias explicabo
        temporibus odio voluptas debitis, neque ratione libero. Quod, fugit
        obcaecati nisi cupiditate numquam non eligendi. Cupiditate qui id
        tempora, aperiam debitis similique quod nam delectus officia omnis vel
        in, dolorem corporis recusandae eius, quasi voluptates error!
        Praesentium pariatur, sint, mollitia ad explicabo blanditiis accusamus
        voluptates ex eum cum minima et doloremque, magni corrupti. Cumque
        aliquid nulla dolorem doloremque exercitationem possimus illo vero minus
        recusandae et. Laborum, dolores. Eligendi unde quo iusto. Asperiores
        neque vel pariatur quidem vero laborum voluptatum reiciendis quis quod
        deleniti eveniet expedita, repudiandae molestias impedit temporibus
        assumenda necessitatibus nisi sapiente. Accusamus animi iusto libero
        incidunt praesentium. Quo soluta eaque explicabo atque exercitationem
        voluptas, illo, repellat labore velit, laboriosam optio consequuntur
        quos sint assumenda delectus repellendus nobis asperiores est neque!
        Consectetur est nam ea doloremque! Tempore, reiciendis a veniam minus
        sunt possimus. Dignissimos ratione ullam dolor debitis atque ipsam,
        impedit aliquam eveniet, tempore perspiciatis obcaecati, facilis
        veritatis illo harum quidem non veniam ducimus aperiam! Debitis voluptas
        quas neque dolorem, aperiam placeat architecto numquam iste possimus
        repellat, id atque porro hic beatae eos magni aliquid odit nam aliquam
        maiores assumenda et consequatur odio nostrum. Eaque omnis aperiam,
        ratione illum nisi natus officiis voluptates, reprehenderit nam
        voluptatum dolores. Voluptates voluptatum corrupti culpa et perspiciatis
        modi dolor, itaque incidunt.l
      </div>
    </>
  );
};

export default Modal;
