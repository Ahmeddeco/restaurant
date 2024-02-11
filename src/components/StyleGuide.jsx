import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const StyleGuide = () => (
	<>
		{/* typography */}
		<div className='flex flex-col gap-y-4 p-24'>
			<h1 className=''>H1</h1>
			<h2 className=''>H2</h2>
			<h3 className=''>H3</h3>
			<p className=''>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor numquam
				iure est ipsa voluptatum. Quam minima quod voluptas obcaecati nisi quo
				officia in ullam incidunt tempore! Doloribus nesciunt unde voluptate.
			</p>
			<div className='bg-black p-24 flex flex-col gap-y-4'>
				<Link href='/'>Link</Link>
				{/* Button */}
				<Button variant='default'>Button 1</Button>
				<Button variant='orange'>Button 2</Button>
				<Button variant='input'>Button 3</Button>
			</div>
		</div>
	</>
)

export default StyleGuide
