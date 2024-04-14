import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLE = {
  color: 'primary.main',
  backgroundColor: 'white',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    backgroundColor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflowX: 'auto',
      borderTop: '1px solid #00bfa5'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLE}
          icon={<DashboardIcon />}
          label="phh235 MERN Stack Board"
          clickable/>
        <Chip
          sx={MENU_STYLE}
          icon={<VpnLockIcon />}
          label="Public/private Workspace"
          clickable/>
        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable/>
        <Chip
          sx={MENU_STYLE}
          icon={<ElectricBoltIcon />}
          label="Automation"
          clickable/>
        <Chip
          sx={MENU_STYLE}
          icon={<FilterListIcon />}
          label="Filter"
          clickable/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button variant="outlined" startIcon={<PersonAddIcon />}>Invite</Button>
        <AvatarGroup
          max={5}
          sx={{
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16
            }
          }}
        >
          <Tooltip title="phh235">
            <Avatar alt="phh235" src="https://avatars.githubusercontent.com/u/121915529?v=4" />
          </Tooltip>
          <Tooltip title="indra">
            <Avatar alt="phh235" src="https://i.pinimg.com/originals/96/51/eb/9651ebc04fe3dfad9d9212db6682a975.jpg" />
          </Tooltip>
          <Tooltip title="andrewh">
            <Avatar alt="phh235" src="https://game8.vn/media/201904/images/naruto-tien-nhan-thuat-1.png" />
          </Tooltip>
          <Tooltip title="hoangdev04">
            <Avatar alt="phh235" src="https://static.vecteezy.com/system/resources/thumbnails/016/724/121/small_2x/pain-tendo-akatsuki-free-vector.jpg" />
          </Tooltip>
          <Tooltip title="phh235">
            <Avatar alt="phh235" src="https://avatars.githubusercontent.com/u/121915529?v=4" />
          </Tooltip>
          <Tooltip title="phh235">
            <Avatar alt="phh235" src="https://avatars.githubusercontent.com/u/121915529?v=4" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
