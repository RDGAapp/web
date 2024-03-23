import styled from 'styled-components';

const Details = styled.details`
  overflow: hidden;
  max-width: min(60ch, 100%);

  & > summary {
    cursor: pointer;

    width: max-content;
    max-width: 100%;
    margin: 0 auto 1rem;

    font-family: '${({ theme }) => theme.fontFamily.header}', sans-serif;
    font-size: 2rem;
    font-weight: 400;
    line-height: 1;
  }

  & > div {
    display: grid;
    gap: 1rem;

    & > article {
      text-align: start;
    }
  }

  ${({ theme }) => theme.media.mobile} {
    text-align: center;
  }
`;
const LawInfo = () => (
  <Details>
    <summary>Юридическая информация</summary>
    <div>
      <article>
        <h3>Реквизиты некоммерческой организации</h3>
        <p>
          Свердловская региональная физкультурно-спортивная общественная
          организация &quot;Федерация флаинг диска Свердловской области&quot; (в
          стадии переоформления в Минюсте в “Межрегиональная диск-гольф
          ассоциация”).
        </p>
      </article>
      <article>
        <h3>Единоличный исполнительный орган:</h3>
        <p>
          Президент Сартаков Иван Михайлович, действующий на основании Устава.
        </p>
      </article>
      <article>
        <h3>Юридический адрес:</h3>
        <p>
          620144, Свердловская область, г. Екатеринбург, ул. Авиационная, дом
          16, квартира 108.
        </p>
      </article>
      <article>
        <h3>Коды по общероссийским классификаторам:</h3>
        <p>ИНН/КПП 6679109827 / 667901001</p>
        <p>ОГРН 1176600002325</p>
        <p>ОКПО 19066438</p>
        <p>ОКАТО 65401390000</p>
        <p>ОКТМО 65701000001</p>
        <p>ОКОГУ 4220003</p>
        <p>ОКФС 53</p>
        <p>ОКОПФ 20200</p>
      </article>
      <article>
        <h3>Банковские реквизиты:</h3>
        <p>р/с 40703810416540005443</p>
        <p>в УРАЛЬСКИЙ БАНК ПАО СБЕРБАНК</p>
        <p>БИК 046577674</p>
        <p>к/с 30101810500000000674</p>
      </article>
    </div>
  </Details>
);

export default LawInfo;
