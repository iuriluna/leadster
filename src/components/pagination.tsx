import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import {Box_Pagination} from '../styles/pagination'

export default function PaginationRounded() {
  return (
    <>
        <Box_Pagination>
            <Stack spacing={2}>
                <Pagination count={4} shape="rounded" />
            </Stack>
        </Box_Pagination>
    </>
  )
}