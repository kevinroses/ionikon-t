import { Trans } from '@lingui/macro'
import styled from 'styled-components'
import { ExternalLink, ThemedText } from 'theme/components'

const StyledLink = styled(ExternalLink)`
  font-weight: 535;
  color: ${({ theme }) => theme.neutral2};
`

const LastUpdatedText = styled.span`
  color: ${({ theme }) => theme.neutral3};
`

const LAST_UPDATED_DATE = '6.7.23'

export default function PrivacyPolicyNotice() {
  return (
    <ThemedText.BodySmall color="neutral2">
      <Trans>Al conectar su billetera acepta</Trans>{' '}
      <StyledLink href="#">
        <Trans>terminos, condiciones.</Trans>{' '}
      </StyledLink>
      <Trans>y consentimiento</Trans>{' '}
      <StyledLink href="#">
        <Trans>de politicas de privacidad</Trans>
      </StyledLink>
     
    </ThemedText.BodySmall>
  )
}
