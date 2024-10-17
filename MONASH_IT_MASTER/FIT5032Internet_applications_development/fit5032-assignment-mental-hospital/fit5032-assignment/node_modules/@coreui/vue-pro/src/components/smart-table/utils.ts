import type {
  Column,
  ColumnFilter,
  ColumnFilterValue,
  Group,
  Item,
  Sorter,
  SorterValue,
  TableFilter,
} from './types'

export const filterColumns = (
  items: Item[],
  columnFilter: boolean | ColumnFilter | undefined,
  columnFilterState: ColumnFilterValue,
  itemsDataColumns: string[],
) => {
  if (columnFilter && typeof columnFilter === 'object' && columnFilter.external) {
    return items
  }

  Object.entries(columnFilterState).forEach(([key, value]) => {
    if (value instanceof Function) {
      items = items.filter((item) => value(item[key]))
      return
    }

    const columnFilter = String(value).toLowerCase()
    if (columnFilter && itemsDataColumns.includes(key)) {
      items = items.filter((item) => {
        return String(item[key]).toLowerCase().includes(columnFilter)
      })
    }
  })

  return items
}

export const filterTable = (
  items: Item[],
  tableFilter: boolean | TableFilter | undefined,
  tableFilterState: string,
  itemsDataColumns: string[],
) => {
  if (
    !tableFilterState ||
    (tableFilter && typeof tableFilter === 'object' && tableFilter.external)
  ) {
    return items
  }

  const filter = tableFilterState.toLowerCase()
  const valueContainFilter = (val: any) => String(val).toLowerCase().includes(filter)
  items = items.filter((item) => {
    return !!itemsDataColumns.find((key) => valueContainFilter(item[key]))
  })

  return items
}

export const getClickedColumnName = (
  target: HTMLTextAreaElement,
  columnNames: string[],
  selectable: boolean | undefined
): string => {
  const closest = target.closest('tr')
  const children = closest ? Array.from(closest.children) : []
  const clickedCell = children.filter((child) => child.contains(target))[0]
  return selectable ? columnNames[children.indexOf(clickedCell) - 1]  : columnNames[children.indexOf(clickedCell)]
}

export const getColumnKey = (column: Column | string) =>
  typeof column === 'object' ? column.key : column

export const getColumnLabel = (column: Column | string) =>
  typeof column === 'object'
    ? column.label !== undefined
      ? column.label
      : pretifyName(column.key)
    : pretifyName(column)

export const getColumnName = (column: string | Column) => {
  if (typeof column === 'object') {
    return column.key
  }

  return column
}

export const getColumnNames = (
  columns: (string | Column)[] | undefined,
  items: Item[],
): string[] => {
  if (columns) {
    const _columns = []

    for (const column of columns) {
      if (typeof column === 'object' && column.children) {
        _columns.push(...getColumnNames(column.children, []))
        continue
      }

      typeof column === 'object' ? _columns.push(column.key) : _columns.push(column)
    }

    return _columns
  }

  return getColumnNamesFromItems(items)
}

export const getColumns = (_columns: (Column | Group | string)[]): (Column | string)[] => {
  const columns = []

  for (const column of _columns) {
    if (typeof column === 'object' && column.group && column.children) {
      columns.push(...getColumns(column.children))
      continue
    }

    if (typeof column === 'object' && column.children) {
      columns.push(...getColumns(column.children))
    }

    columns.push(column)
  }

  return columns
}

export const countColumns = (columns: Column[], counter = 0) => {
  let _counter = counter
  for (const column of columns) {
    if (!column.children) {
      _counter++
    }

    if (column.children) {
      _counter = countColumns(column.children, _counter)
    }
  }

  return _counter
}

export const getColumnGroups = (columns: (string | Column)[] | undefined) => {
  const groups = []

  const traverseColumns = (column: Column, deep = 0, colSpan = 0): Group[] => {
    const groups = []

    if (column.children) {
      for (const _column of column.children) {
        if (!_column.group) {
          colSpan++
        }
        groups.push(...traverseColumns(_column, deep + 1, colSpan))
      }
    }

    if (typeof column === 'object' && column.group) {
      const { children, group, ...rest } = column
      groups.push({
        deep: deep,
        label: group,
        ...(children && { colspan: countColumns(children) }),
        ...rest,
      })
    }

    return groups
  }

  if (columns) {
    for (const column of columns) {
      if (typeof column === 'object' && column.group) {
        const objects = traverseColumns(column)

        if (objects) {
          for (const object of objects) {
            const { deep, ...rest } = object

            if (deep === undefined) {
              continue
            }

            for (let i = 0; i < deep; i++) {
              if (groups[i]) {
                continue
              }

              groups.push([])
            }

            if (groups[deep]) {
              groups[deep].push(rest)
            } else {
              groups.push([rest])
            }
          }
        }
      }
    }
  }
  return groups
}

export const getColumnNamesFromItems = (items: Item[]) =>
  Object.keys(items[0] || {}).filter((el) => el.charAt(0) !== '_')

export const getColumnSorterState = (
  key: string,
  sorterState: SorterValue | undefined,
): string | number => {
  if (sorterState && sorterState.column === key) {
    if (sorterState.state) {
      return sorterState.state
    }
    return 0
  }

  return 0
}

export const getColumnValues = (items: Item[], key: string) => {
  return items.map((item) => item[key])
}

export const getTableDataCellProps = (column: Column | string, item: Item, colName: string) => {
  const props = {}

  if (typeof column === 'object' && column._colProps) {
    Object.assign(props, column._colProps)
  }

  if (item._cellProps && item._cellProps['all']) {
    Object.assign(props, item._cellProps['all'])
  }

  if (item._cellProps && item._cellProps[colName]) {
    Object.assign(props, item._cellProps[colName])
  }

  return props
}

export const getTableDataCellStyles = (column: Column | string, item: Item, colName: string) => {
  const styles = {}

  if (typeof column === 'object' && column._colStyle) {
    Object.assign(styles, column._colStyle)
  }

  if (item._cellStyle && item._cellStyle['all']) {
    Object.assign(styles, item._cellStyle['all'])
  }

  if (item._cellStyle && item._cellStyle[colName]) {
    Object.assign(styles, item._cellStyle[colName])
  }

  return styles
}

export const getTableHeaderCellProps = (column: Column | string) => {
  if (typeof column === 'object' && column._props) {
    return column._props
  }

  return {}
}

export const getTableHeaderCellStyles = (
  column: Column | string,
  columnSorter: boolean | Sorter | undefined,
) => {
  const style = {}

  if (
    columnSorter &&
    (typeof column !== 'object' ||
      (typeof column === 'object' && (column.sorter === undefined || column.sorter)))
  ) {
    (style as { [key: string]: string })['cursor'] = 'pointer'
  }

  if (typeof column === 'object' && column._style) {
    return { ...style, ...column._style }
  }
  return style
}

export const isSortable = (
  i: number,
  columns: (string | Column)[] | undefined,
  columnSorter: Sorter | boolean | undefined,
  itemsDataColumns: string[],
  columnNames: string[],
): boolean | undefined => {
  const isDataColumn = itemsDataColumns.includes(columnNames[i])
  let column
  if (columns) column = columns[i]
  return (
    columnSorter &&
    (!columns ||
      typeof column !== 'object' ||
      (typeof column === 'object' && (column.sorter === undefined || column.sorter))) &&
    isDataColumn
  )
}

export const pretifyName = (name: string) => {
  return name
    .replace(/[-_.]/g, ' ')
    .replace(/ +/g, ' ')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export const sortItems = (
  columnSorter: boolean | Sorter | undefined,
  items: Item[],
  itemsDataColumns: string[],
  sorterState: SorterValue,
) => {
  const column = sorterState.column
  if (
    !column ||
    !itemsDataColumns.includes(column) ||
    (columnSorter && typeof columnSorter === 'object' && columnSorter.external)
  ) {
    return items
  }

  const flip = sorterState.state === 'asc' ? 1 : sorterState.state === 'desc' ? -1 : 0
  const sorted = items.slice().sort((item, item2) => {
    const value = item[column]
    const value2 = item2[column]
    const a = typeof value === 'number' ? value : String(value).toLowerCase()
    const b = typeof value2 === 'number' ? value2 : String(value2).toLowerCase()
    return a > b ? 1 * flip : b > a ? -1 * flip : 0
  })
  return sorted
}
