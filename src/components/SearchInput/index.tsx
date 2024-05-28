'use client';

import { useGlobalStore } from '@/src/store/global';
import { ChangeEvent } from 'react';

type SearchInputProps = {
	customClass?: string;
	textShow: string;
};

const SearchInput = ({ textShow, customClass }: SearchInputProps) => {
	const { setInputValue, inputValue } = useGlobalStore();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setInputValue(value);
	};

	return (
		<div className={`relative ${customClass}`}>
			<input
				id='search'
				className='input-floating peer'
				type='text'
				placeholder=''
				value={inputValue}
				onChange={handleChange}
			/>
			<label htmlFor='search' className={`input-floating--label`}>
				{textShow}
			</label>
		</div>
	);
};

export default SearchInput;
