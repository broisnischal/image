
import { ImageResponse } from 'next/og'
import satori from 'satori'
import { load } from 'cheerio'
 

export async function GET(request: Request) {
  let url = new URL(request.url)
  let username = url.searchParams.get('q') || 'broisnischal'

  	const response = await fetch('https://codeium.com/profile/broisnischal');


  	const data = await response.text();

    console.log(data)
    
	// const $ = load(data);

	// const svgContent = $('svg.h-full.w-full').parent().html();


  // console.log(svgContent)
 

  // const image = await satori(
  //   {
  //     body: buffer,
  //     width: 1200,
  //     height: 630,
  //   },
  //   {
  //     fonts: [
  //       {
  //         name: 'Inter',
  //         data: inter,
  //         weight: 400,
  //         style: 'normal',
  //       },
  //     ],
  //   }
  // )

  // const base64 = Buffer.from(image).toString('base64')

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
        <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
          <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
            {username}
          </h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}