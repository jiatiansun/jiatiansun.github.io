import { defineStyle, defineStyleConfig} from '@chakra-ui/react'

const brandPrimary = defineStyle({
    borderWidth: '3px',
    borderStyle: 'dashed',
    borderColor: 'blackAlpha.700',
})

export const dividerTheme = defineStyleConfig({
    variants: { brandPrimary },
})
