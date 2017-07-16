import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ArchiveIcon from 'react-icons/lib/md/add';
import { Button } from '@buttercup/ui';
import styled from 'styled-components';
import { isOSX } from '../../shared/utils/platform';
import { showContextMenu } from '../system/menu';
import EmptyView from './empty-view';
import BaseColumn from './column';
import SidebarItem from './sidebar-item';

const Column = styled(BaseColumn)`
  width: ${props => props.condenced ? 'var(--sidebar-width-condenced)' : 'var(--sidebar-width)'};
  height: 100%;
  background-color: ${isOSX() ? 'transparent' : 'var(--sidebar-bg)'};
  display: flex;
`;

const ArchiveList = styled.ul`
  margin: calc(var(--spacing-one) * 3) 0 0 0;
  padding: 0;
`;

class RecentFiles extends Component {
  static propTypes = {
    condenced: PropTypes.bool,
    archives: PropTypes.array,
    currentArchiveId: PropTypes.string,
    onRemoveClick: PropTypes.func,
    onOpenClick: PropTypes.func,
    onNewClick: PropTypes.func,
    onCloudClick: PropTypes.func,
    onArchiveUpdate: PropTypes.func,
    onClick: PropTypes.func,
    showImportDialog: PropTypes.func
  };

  showCreateMenu = () => {
    showContextMenu([
      {
        label: 'Open Archive File',
        accelerator: 'CmdOrCtrl+O',
        click: this.props.onOpenClick
      },
      {
        label: 'New Archive File',
        accelerator: 'CmdOrCtrl+N',
        click: this.props.onNewClick
      },
      {
        label: 'Connect Cloud Sources',
        accelerator: 'CmdOrCtrl+Shift+C',
        click: this.props.onCloudClick
      }
    ]);
  }

  renderEmptyState() {
    return (
      <div>
        <EmptyView caption="No archives yet." />
      </div>
    );
  }

  render() {
    const { archives, currentArchiveId, condenced } = this.props;

    // if (archives.length === 0) {
    //   return this.renderEmptyState();
    // }

    const footer = (
      <Button
        dark
        full
        onClick={this.showCreateMenu}
        icon={<ArchiveIcon />}
        >
        {condenced ? ' ' : 'Add Archive'}
      </Button>
    );

    return (
      <Column footer={footer} condenced={condenced}>
        <ArchiveList>
          {archives.map((archive, i) =>
            <SidebarItem
              active={archive.id === currentArchiveId}
              archive={archive}
              key={archive.id}
              index={i}
              condenced={condenced}
              onArchiveUpdate={this.props.onArchiveUpdate}
              onClick={() => this.props.onClick(archive.id)}
              onRemoveClick={() => this.props.onRemoveClick(archive.id)}
              showImportDialog={this.props.showImportDialog}
            />
          )}
        </ArchiveList>
      </Column>
    );
  }
}

export default RecentFiles;
