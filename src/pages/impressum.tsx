import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';

export default function Impressum() {
  return (
    <Layout>
      <Seo 
        templateTitle='Impressum' 
        title='Impressum - Gitarrenunterricht Halle Steven Lawrenz'
        description='Impressum und Datenschutzerklärung von Steven Lawrenz, Gitarrenlehrer in Halle (Saale). Kontakt: Große Gosenstraße 24, 06114 Halle.'
        keywords='Impressum, Steven Lawrenz, Gitarrenlehrer Halle, Kontakt, Datenschutz'
        includeLocalBusiness={false}
      />

      <main>
        <section className='bg-white'>
          <div className='layout prose flex min-h-screen flex-col items-center justify-center text-center text-black'>
            <h1 className='mt-8 text-4xl md:text-6xl'>Impressum</h1>
            <h2>Angaben gemäß § 5 TMG:</h2>
            <p>Steven Lawrenz, Große Gosenstraße 24, 06114 Halle (Saale)</p>
            <h2>Kontakt:</h2>
            <table>
              <tbody>
                <tr>
                  <td>Telefon:</td>
                  <td>+49 157 83024534</td>
                </tr>
                <tr>
                  <td>E-Mail:</td>
                  <td>steven.lawrenz[at]gmx.net</td>
                </tr>
              </tbody>
            </table>
            <p>
              Quelle:{' '}
              <em>
                <a rel='nofollow' href='http://www.e-recht24.de'>
                  http://www.e-recht24.de
                </a>
              </em>
            </p>
            <h2>Haftungsausschluss (Disclaimer)</h2>

            <p>
              <strong>Haftung für Inhalte</strong>
            </p>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
              Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine
              diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
              Kenntnis einer konkreten Rechtsverletzung möglich. Bei
              Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </p>
            <p>
              <strong>Haftung für Links</strong>
            </p>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
              der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
            <p>
              <strong>Urheberrecht</strong>
            </p>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
              Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
              Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Inhalte umgehend entfernen.
            </p>
            <h2>Datenschutzerklärung:</h2>
            <p>
              <strong>Datenschutz</strong>
            </p>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend der gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p>
              Die Nutzung unserer Webseite ist in der Regel ohne Angabe
              personenbezogener Daten möglich. Soweit auf unseren Seiten
              personenbezogene Daten (beispielsweise Name, Anschrift oder
              E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich,
              stets auf freiwilliger Basis. Diese Daten werden ohne Ihre
              ausdrückliche Zustimmung nicht an Dritte weitergegeben.
            </p>
            <p>
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B.
              bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen
              kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
              Dritte ist nicht möglich.
            </p>

            <ArrowLink className='mt-4 md:text-lg' href='/'>
              Zurück zur Startseite
            </ArrowLink>
          </div>
        </section>
      </main>
    </Layout>
  );
}
