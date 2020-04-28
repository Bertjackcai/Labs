import * as React from 'react';
import { Input, Button } from 'antd';
import styles from './index.scss';
import { LabSearchProps } from '@/interfaces/lab';

interface SearchFilterProps {
  searchProps: LabSearchProps;
  changeSearchProps: (searchProps: LabSearchProps) => void;
  onSearch: () => void;
}

export default class SearchFilter extends React.PureComponent<SearchFilterProps> {
  render() {
    const { searchProps, onSearch, changeSearchProps } = this.props;
    return (
      <div className={styles.filterPanel}>
        <div className={styles.filterItem}>
          <span className={styles.label}>比赛项目名称：</span>
          <Input
            allowClear={true}
            value={searchProps.competitionEventName}
            placeholder="请输入比赛项目名称"
            onChange={e => changeSearchProps({ competitionEventName: e.target.value })}
          />
        </div>
        {/* <div className={styles.filterItem}>
          <span className={styles.label}>场地位置：</span>
          <Input
            allowClear={true}
            value={searchProps.director}
            placeholder="请输入场地位置"
            onChange={e => changeSearchProps({ director: e.target.value })}
          />
        </div> */}

        <Button type="primary" onClick={onSearch}>
          查询
        </Button>
      </div>
    );
  }
}
