from functools import wraps
from typing import NewType
from inspect import isclass


# self 는 과연 어떤 객체로 사용되고 있는 것일까
class deco_class:
    def __init__(self):
        pass

    def self_pinrt(self):
        print(self.__class__)

    @classmethod
    def deco_session(cls, trans):
        def print_func():
            print('이건 데코 시험입니다.')

        def deco(func):
            print_func()
            @wraps(func)
            def wrapper(*args, **kargs):
                self = list(map(lambda x: type(x), args))
                self = list(map(lambda x: isinstance(x, func.__class__) , args))
                print('args:', args)
                print(self)
                print(type(args[0]), isclass(args[0]), args[0].__class__)
                print('kargs:', kargs)
                return func(*args, **kargs)
            return wrapper
        return deco


class self_class(object):
    def __init__(self):
        self.num = 10

    @deco_class.deco_session('123')
    def add_func(self, a, b):
        return a+b

b = deco_class()
b.self_pinrt()
if __name__ == '__main__':
    a = self_class()

    a.add_func(1, 2)
