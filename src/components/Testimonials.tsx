import clsx from 'clsx';
import Image from 'next/image';

const featuredTestimonial = {
  body: `Dr. Lalit Pokharia and the medical staff were exceptionally professional and attentive. They took the time to listen to my concerns, conducted a thorough examination, and explained the diagnosis and treatment options in a clear and understandable manner.`,
  author: {
    name: 'Rahul Singh Adhikari',
    handle: 'RahulSingh',
    imageUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjWlNdlJhEgwVwrF9YTAPdasOYufrii1vrjWnfY1o6kzRQ5UI8l50A=w75-h75-p-rp-mo-ba2-br100',
    logoUrl: '/images/logos/resend.svg',
  },
};
const testimonials: {
  body: string;
  author: {
    name: string;
    handle: string;
    imageUrl: string;
  };
}[][][] = [
  [
    [
      {
        body: 'Excellent  treatment  in sharda ent hospital  advice people  to visited  hospitals  for any ent problem.',
        author: {
          name: 'anju bisht',
          handle: 'anjubisht',
          imageUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjU_-loIMjk5Wkaqs913HB6kjU1mV-90KFnsNwRc0tQaaA3rZPo=w75-h75-p-rp-mo-br100',
        },
      },
      {
        body: 'The care and attention I received were exceptional. My surgery was smooth, and the recovery was quick.',
        author: {
          name: 'Deepash Tiwari',
          handle: 'DeepashTiwari',
          imageUrl: '	https://lh3.googleusercontent.com/a-/ALV-UjXFv0az5rI5j_K5eoMtfKH87ibcve5RstX78T6PPyJ_EAgG5n8=w75-h75-p-rp-mo-br100',
        },
      },
      {
        body: 'I was nervous about my child’s tonsillectomy, but we were made to feel at ease. The procedure was a success, and my child is healthier than ever.',
        author: {
          name: 'Vinay Katiyar',
          handle: 'ktyr',
          imageUrl:
            'https://ph-avatars.imgix.net/2743360/28744c72-2267-49ed-999d-5bdab677ec28?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=120&h=120&fit=crop&dpr=2',
        },
      },
    ],
    [
      {
        body: `They diagnosed my ear problem quickly and provided effective treatment. The professionalism and compassion are unmatched. Thanks to their expertise, my sleep apnea is now manageable. The improvement in my quality of life is incredible.`,
        author: {
          name: 'kadir ansari',
          handle: 'kadir',
          imageUrl:
            'https://lh3.googleusercontent.com/a-/ALV-UjXNYDLMrikxJAnYQ5Wz6ymDsXz-QLg2Nt6dW_qzMpSdPa8jU8hw_w=w45-h45-p-rp-mo-br100',
        },
      },
    ],
  ],
  [
    [
      {
        body: 'I highly recommend this clinic for anyone dealing with ENT issues.',
        author: {
          name: 'vishal singh',
          handle: 'vishalsingh',
          imageUrl: 'https://pbs.twimg.com/profile_images/1558195781089120256/RWvUylSb_400x400.jpg',
        },
      },
      {
        body: 'The personalized care I received was outstanding. Everything was explained in detail, and all my questions were answered.',
        author: {
          name: 'Prem Saini',
          handle: 'premsaini',
          imageUrl:
            'https://ph-avatars.imgix.net/4438396/079fabcb-7d01-42d9-a98f-2fc7befce04e?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=120&h=120&fit=crop&dpr=2',
        },
      },
    ],
    [
      {
        body: `Sharda ENT Hospital is highly regarded for its expertise in ear, nose, and throat care. Patients often praise its skilled doctors, modern facilities, and personalized approach to treatment. Overall, it's considered a top choice for ENT care.'`,
        author: {
          name: 'Kaif mikrani',
          handle: 'Kaifmikrani',
          imageUrl: 'https://lh3.googleusercontent.com/a-/ALV-UjUxP5z0oEGp2cyWdmLvBT_2X4pozY6jQeVALmkdBJmxysPVNsoA=w75-h75-p-rp-mo-br100',
        },
      },
      {
        body: `Their expertise in treating my allergies has been a game-changer. I no longer suffer from constant congestion and discomfort.`,
        author: {
          name: 'Rahul Kumar',
          handle: 'RahulKumar',
          imageUrl:
            'https://lh3.googleusercontent.com/a-/ALV-UjXmVtA9PeDDETyOqHhKfdFW5hBzQqmPSKwjYWoFAdMkVk4kLe_d=w75-h75-p-rp-mo-br100',
        },
      },
    ],
  ],
];

export function Testimonials() {
  return (
    <div className="relative isolate bg-white pb-20 pt-12 sm:pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">Sharda Ent Hospital</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hear From Our Satisfied Patients
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
              <Image
                className="h-10 w-10 flex-none rounded-full bg-gray-50"
                src={featuredTestimonial.author.imageUrl}
                alt=""
                width={40}
                height={40}
              />
              <div className="flex-auto">
                <div className="font-semibold">{featuredTestimonial.author.name}</div>
                <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
              </div>
              {/* <Image
                className="h-8 w-auto flex-none"
                src={featuredTestimonial.author.logoUrl}
                alt=""
                height={32}
                width={98}
                unoptimized
              /> */}
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={clsx(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                      ? 'xl:row-span-2'
                      : 'xl:row-start-1',
                    'space-y-8'
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <Image
                          className="h-10 w-10 rounded-full bg-gray-50"
                          src={testimonial.author.imageUrl}
                          alt=""
                          width={40}
                          height={40}
                        />
                        <div>
                          <div className="font-semibold">{testimonial.author.name}</div>
                          {testimonial.author.handle ? (
                            <div className="text-gray-600">@{testimonial.author.handle}</div>
                          ) : undefined}
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
