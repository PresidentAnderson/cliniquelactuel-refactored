import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">Clinique l'Actuel</h3>
            <p className="text-gray-400 text-sm">
              Votre partenaire de confiance pour des soins de santé professionnels
              à Montréal depuis plus de 30 ans.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Nos Services
                </Link>
              </li>
              <li>
                <Link href="/equipe" className="text-gray-400 hover:text-white transition-colors">
                  Notre Équipe
                </Link>
              </li>
              <li>
                <Link href="/ressources" className="text-gray-400 hover:text-white transition-colors">
                  Ressources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/consultation" className="text-gray-400 hover:text-white transition-colors">
                  Consultation Générale
                </Link>
              </li>
              <li>
                <Link href="/services/tests" className="text-gray-400 hover:text-white transition-colors">
                  Tests et Dépistage
                </Link>
              </li>
              <li>
                <Link href="/services/preventif" className="text-gray-400 hover:text-white transition-colors">
                  Soins Préventifs
                </Link>
              </li>
              <li>
                <Link href="/services/vaccinations" className="text-gray-400 hover:text-white transition-colors">
                  Vaccinations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="tel:514-524-1001" className="hover:text-white transition-colors">
                  Tél: 514-524-1001
                </a>
              </li>
              <li>
                <a href="mailto:info@cliniquelactuel.com" className="hover:text-white transition-colors">
                  info@cliniquelactuel.com
                </a>
              </li>
              <li className="pt-2">
                <p className="text-sm">Lun-Ven: 7h30 - 20h00</p>
                <p className="text-sm">Sam-Dim: 7h30 - 15h00</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Clinique l'Actuel. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/confidentialite" className="text-gray-400 hover:text-white text-sm transition-colors">
              Politique de Confidentialité
            </Link>
            <Link href="/conditions" className="text-gray-400 hover:text-white text-sm transition-colors">
              Conditions d'Utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
