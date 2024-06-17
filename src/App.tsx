import { Box, Card, CardContent, Typography } from '@mui/material'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DownloadIcon from '@mui/icons-material/Download';
import DescriptionIcon from '@mui/icons-material/Description';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", width: "100vw", alignItems: "center", height: "100vh", backgroundColor: "#989898" }}>
      <Card sx={{ minWidth: 500, p: 2, backgroundColor: "#222", color: "#aaa" }}>
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>
            Pre-edit cleanup
          </Typography>
          <Box>
            <PersonOutlineIcon />
            <PersonOutlineIcon />
            <PersonOutlineIcon />
            <DownloadIcon />
          </Box>
        </CardContent>
        <Box sx={{ paddingX: 3 }}>
          <CardContent sx={{ display: "flex", justifyContent: "space-between", borderRadius: "5px", borderColor: "darkgrey", border: "1px solid", p: 1.5, m: 0, pt: 2.5 }}>
            <Section name='INPUT' files={["sample1.docx", "sample2.docx", "sample3.docx"]} />
            <Section name='OUTPUT' files={["sample1.docx", "sample2.docx", "sample3.docx"]} />
          </CardContent>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", p: 2, pt: 2.5, pb: 1 }}>
          <Typography>Completed</Typography>
          <Box sx={{ display: "flex", verticalAlign: "middle", gap: 0.5 }}>
            <AccessTimeIcon />
            <Typography>16/06/2024 14:30:00</Typography>
          </Box>
        </Box>
      </Card>
      <Card sx={{ minWidth: 500, p: 2, backgroundColor: "#222", color: "#aaa" }}>
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>
            Artcatalog
          </Typography>
          <Box>
            <PersonOutlineIcon />
            <PersonOutlineIcon />
            <PersonOutlineIcon />
            <DownloadIcon />
          </Box>
        </CardContent>
        <Box sx={{ paddingX: 3 }}>
          <CardContent sx={{ display: "flex", justifyContent: "space-between", borderRadius: "5px", borderColor: "darkgrey", border: "1px solid", p: 1.5, m: 0, pt: 2.5 }}>
            <Section name='INPUT' files={["sample1.jpg", "sample2.gif", "sample3.tif"]} />
            <Section name='OUTPUT' files={["record.pdf", "sample2.docx"]} />
          </CardContent>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", p: 2, pt: 2.5, pb: 1 }}>
          <Typography color="green">Running</Typography>
          <Box sx={{ display: "flex", verticalAlign: "middle", gap: 0.5 }}>
            <AccessTimeIcon />
            <Typography>16/06/2024 14:30:00</Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  )
}

function Section(props: { name: string, files: Array<string> }) {
  return <Box minWidth={180} textAlign="center" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
    <Box display="flex" sx={{ verticalAlign: "middle", gap: 1 }}>
      <Typography flexGrow="1" border="1px solid lightgrey" borderRadius="5px" sx={{ pt: "3px" }}>{props.name}</Typography>
      <DownloadIcon />
    </Box>
    <Box display="flex" flexDirection="column" gap={1}>
      {props.files.map(file => <File name={file} />)}
    </Box>
  </Box>
}

function File(props: { name: string }) {
  return <Box sx={{ display: "flex", textAlign: 'start', gap: 2, justifyContent: "space-between" }}>
    <DescriptionIcon />
    <Typography flexGrow={1}>{props.name}</Typography>
    <DownloadIcon />
  </Box>
}

export default App
