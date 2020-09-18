import Link from 'next/link'
import { Typeahead } from 'react-bootstrap-typeahead';

export default function AboutPage() {
  return <div>
    <div>
      <Link href="/" >
        <a>Index </a>
      </Link>
    </div>

    < div >
      <Typeahead
        id='about-typeahead'
        onChange={(selected) => {
          console.log(selected)
        }
        }
        options={['opt1', 'opt2']}
      />
    </div>
  </div>
}
