import Footer from "./Footer"
import Navbar from "./Navbar"
import book from '/src/book.png';

function About() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen pt-36">
                <h1 className="font-bold text-center text-4xl">About US</h1>
                <h3 className="text-center text-rose-500 font-sans text-2xl pt-5">"A room without books is like a body without a soul!"</h3>
                <div className="p-10 pt-10 text-justify flex">
                    <div className="flex-1">
                        Welcome to bookStore, your one-stop destination for books, knowledge, and inspiration. Founded with a love for literature and a passion for reading, we are dedicated to providing a carefully curated selection of books for all ages and interests.
                        Whether you're an avid reader or a first-time visitor, our bookstore offers something for everyone. From bestselling novels and timeless classics to niche genres and educational resources, we pride ourselves on offering a diverse range of titles. We are more than just a bookstore; we are a community hub where book lovers can come together, share recommendations, and celebrate the power of stories.
                        A bookstore is a retail establishment that specializes in selling books. These shops can range in size and variety, from small independent stores to large, chain-operated locations. A bookstore typically stocks a wide range of books across multiple genres, including fiction, non-fiction, children's books, educational texts, cookbooks, graphic novels, and more. Many bookstores also offer stationery, gifts, and sometimes a small selection of magazines or newspapers.
                        In addition to traditional brick-and-mortar stores, bookstores may have an online presence where customers can purchase books for delivery or in digital formats (eBooks). Some bookstores also host special events such as book signings, author readings, or community gatherings, which help foster a connection with the literary community.
                        The atmosphere in a bookstore is often designed to encourage browsing, with books organized by genre, author, or theme, and cozy reading areas where customers can relax and explore new titles. Larger bookstores may also feature coffee shops, cafes, or small seating areas for customers to enjoy while reading.
                        Bookstores, especially independent ones, are often seen as cultural hubs, offering not just books, but a space for intellectual engagement and creativity
                        .</div>
                    <div>
                        <img src={book} className="w-[700px] h-[500px]" alt="" />
                    </div>



                </div>

            </div>
            <Footer />
        </>
    )
}

export default About
