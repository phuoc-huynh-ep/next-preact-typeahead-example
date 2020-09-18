import Link from 'next/link'
import { Typeahead } from 'react-bootstrap-typeahead';

export default function IndexPage() {
  return (
    <>
      <div>
        Hello World.{' '}
        <Link href="/about" >
          <a>About </a>
        </Link>
        <Typeahead
          id='index-typeahead'
          onChange={(selected) => {
            console.log(selected)
          }
          }
          options={['a', 'b']}
        />
      </div>
    </>
  )
}
