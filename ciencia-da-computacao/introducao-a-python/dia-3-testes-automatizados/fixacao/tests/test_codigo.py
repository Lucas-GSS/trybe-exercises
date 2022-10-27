from decimal import DivisionByZero
import pytest
from codigo import is_odd, sum, divide

def test_is_odd_when_number_is_odd_returns_true():
    'Para um número ímpar a função deve retornar o valor True'
    assert is_odd(3) is True


def test_is_odd_when_number_is_even_returns_false():
    'Para um número par a função deve retornar o valor False'
    assert is_odd(2) is False

def test_if_sum_return_sum_between_two_numbers():
    'Retorna a soma entre dois números'
    assert sum(2, 2) == 4


def test_if_divide_returns_the_division_between_two_numbers():
    'Retorna a divisão entre dois números'
    assert divide(9,3) == 3

# método raises do pytest serve para verificar o lançamento de uma exceção por parte do código testado
# recebe como parâmetro o tipo do erro esperado, e a mensagem. Cria-se um contexto com with e dentro dele a asserção
def test_divide_throws_an_exception_if_a_number_is_zero():
    'Lança um erro se um dos números é zero'
    with pytest.raises(ZeroDivisionError, match='division by zero'):
        assert divide(3,0)


# (test) fixture é um recurso para criar um contexto para o teste, antes da ação do código ou da asserção
# ele permite criar uma pré-condição para a execução do teste