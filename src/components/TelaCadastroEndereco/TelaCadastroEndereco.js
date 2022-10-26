import { Form, FormContainer, Input, SendButton, StyledLabel, RegisterButton } from "./styled";


function TelaCadastroEndereco(props){
    return (
        <FormContainer>
            <h1>Endereço</h1>
            <Form>
                <StyledLabel>Endereço:
                    <Input/>
                </StyledLabel>
                <StyledLabel>Número da Residencia:
                    <Input/>
                </StyledLabel>
                <StyledLabel>Telefone
                    <Input type={"number"}/>
                </StyledLabel>
                <SendButton onClick={() => props.mudarTela(4)}>Cadastrar</SendButton>
            </Form>
        </FormContainer>
    )
}

export default TelaCadastroEndereco;