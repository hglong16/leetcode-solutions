# @Author: hglong16 | intihad.vuong@gmail.com
# @Date: 2023-06-20 22:29:45
# @Last Modified by:   hglong16
# @Last Modified time: 2023-06-20 22:29:45


class Solution:
    def isValid(self, s: str) -> bool:
        stack = []

        for c in s:
            if c == "(" or c == "[" or c == "{":
                stack.append(c)
            elif len(stack) == 0:
                return False
            else:
                last = stack.pop()
                pair = last + c
                if not (pair == "()" or pair == "[]" or pair == "{}"):
                    return False

        return len(stack) == 0
