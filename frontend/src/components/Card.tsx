import JJ from './../assets/JJ.jfif'

function Card() {
  return (
    <>
      <div className="bg-neutral-primary-soft block max-w-sm p-4 mt-2 border border-default rounded-2xl shadow-lg hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-shadow duration-300 ease-in-out">
        <a href="#">
          <img
            className="w-40 rounded-xl"
            src={JJ}
            alt=""
          />
        </a>
        <a href="/">
          <h5 className="mt-4 mb-2 text-2xl font-semibold tracking-tight text-heading">
            Streamlining your design process today.
          </h5>
        </a>
        <p className="mb-6 text-body">
          In today's fast-paced digital landscape, fostering seamless
          collaboration among Developers and IT Operations.
        </p>
        <a
          href="#"
          className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-xl text-sm px-4 py-2.5 focus:outline-none"
        >
          Read more
          <svg
            className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </a>
      </div>
    </>
  );
}

export default Card;