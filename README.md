## [useRef](https://reactjs.org/docs/hooks-reference.html#useref)

`Cơ bản useRef() nó trả về một object và persist object này qua các lần renders`.
`Để set giá trị, mình dùng cái current`

```bash
const refContainer = useRef(initialValue);
const initialValue = useRef(null)
```

`Nó sẽ không thay đổi giá trị giữa các lần render, và giá trị mặc định của ref là null`

`Sử dụng bằng cách gán vào là 1 giá trị current`

```bash
initialValue.curent = ...
```

`useRef đã làm cho component bị re-render lại`

```bash
    const countRef = useRef(0);

    useRef({
    current: 0,
    })
```

<hr/>
`Khi ta làm thay đổi giá trị của current: `

```bash
    countRef.current = countRef.current + 1;
```

`thì vẫn không re-render lại`

`Và bởi vì đặc điểm này thì những thứ cần hiển thị lên UI thì dùng useState còn ngược lại thì dùng useRef`

`Và useRef cũng giải quyết cho chúng ta về mặt Stale Closure`

<hr/>
`Sử dụng useRef đẻ truy vấn 1 element trên cây DOM: `

```bash
  const ref = useRef(null);
  console.log(ref);

  useEffect(() => {
    ref.current.focus();
  }, []);
```

`Sẽ tự động focus vào ô input`
