import { Link } from "@/i18n/routing"
import Image from "next/image"

function NotFound() {
  return (
    <div>
	    <section className="error-area">
	    	<div className="d-table">
	    		<div className="d-table-cell">
	    			<div className="container">
	    				<div className="error-content">
	    					<Image width={658} height={332}  src="/img/404.png" alt="error"/>
	    					<h3>Page Not Found</h3>
	    					<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
	    					<Link href="/" className="default-btn-one">Go to Home</Link>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    </section>
    </div>
  )
}

export default NotFound