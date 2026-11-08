package com.vishnupriyahospital.korutla.ui.screens

import android.content.Intent
import android.net.Uri
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.vishnupriyahospital.korutla.model.Doctor

@Composable
fun DoctorsScreen(
    isTelugu: Boolean,
    onNavigateToTimings: () -> Unit,
    modifier: Modifier = Modifier
) {
    val context = LocalContext.current

    // Exactly 2 doctors: Dr. Naresh and Dr. Archana, BDS
    val doctors = remember {
        listOf(
            Doctor(
                id = "doc1",
                name = "Dr. Naresh",
                nameTe = "డాక్టర్ నరేష్",
                designation = "Senior Orthopaedic Surgeon & Joint Replacement Specialist",
                designationTe = "సీనియర్ ఆర్థోపెడిక్ సర్జన్ & జాయింట్ రీప్లేస్‌మెంట్ నిపుణులు",
                qualification = "MBBS, MS (Orthopaedics), FIJR (Fellow Joint Replacement)",
                department = "Orthopaedics & Joint Replacement",
                departmentTe = "ఆర్థోపెడిక్స్ & ఎముకలు, కీళ్ల శస్త్రచికిత్స విభాగం",
                experienceYears = 16,
                opTimings = "10:00 AM - 02:00 PM & 06:00 PM - 09:00 PM",
                opTimingsTe = "ఉదయం 10:00 - మధ్యాహ్నం 02:00 & సాయంత్రం 06:00 - రాత్రి 09:00",
                consultationInfo = "Walk-in OP at Hospital Reception",
                rating = 4.9,
                specializations = listOf(
                    "Total Knee Replacement (TKR)",
                    "Total Hip Replacement (THR)",
                    "Complex Fracture & Trauma Surgery",
                    "Arthroscopic Key-hole Surgery",
                    "Spine & Sciatica Back Pain Management"
                )
            ),
            Doctor(
                id = "doc2",
                name = "Dr. Archana",
                nameTe = "డాక్టర్ అర్చన",
                designation = "Dental Surgeon & Oral Health Specialist",
                designationTe = "దంత వైద్య నిపుణులు (డెంటల్ సర్జన్)",
                qualification = "BDS (Bachelor of Dental Surgery)",
                department = "Dental Care & Oral Surgery",
                departmentTe = "విష్ణు ప్రియ దంత వైద్య విభాగం",
                experienceYears = 11,
                opTimings = "10:00 AM - 01:30 PM & 05:30 PM - 08:30 PM",
                opTimingsTe = "ఉదయం 10:00 - మధ్యాహ్నం 01:30 & సాయంత్రం 05:30 - రాత్రి 08:30",
                consultationInfo = "Walk-in OP at Hospital Reception",
                rating = 4.9,
                specializations = listOf(
                    "Root Canal Treatment (RCT)",
                    "Dental Implants & Fixed Ceramic Teeth",
                    "Teeth Alignment & Orthodontic Braces",
                    "Painless Tooth Extraction",
                    "Teeth Whitening, Cleaning & Scaling"
                )
            )
        )
    }

    LazyColumn(
        modifier = modifier
            .fillMaxSize()
            .background(MaterialTheme.colorScheme.background),
        contentPadding = PaddingValues(16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        item {
            Text(
                text = if (isTelugu) "మా నిపుణులైన వైద్యులు" else "Specialist Doctors",
                style = MaterialTheme.typography.titleLarge.copy(fontWeight = FontWeight.Bold)
            )
            Text(
                text = if (isTelugu)
                    "కోరుట్లలో ఎముకలు, కీళ్ల శస్త్రచికిత్సలు మరియు అత్యాధునిక దంత వైద్యం"
                else
                    "Dedicated Orthopaedic and Dental healthcare specialists in Korutla.",
                style = MaterialTheme.typography.bodySmall.copy(color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.7f)),
                modifier = Modifier.padding(top = 2.dp)
            )
        }

        // Direct Walk-In Announcement banner
        item {
            Surface(
                shape = RoundedCornerShape(12.dp),
                color = MaterialTheme.colorScheme.primaryContainer.copy(alpha = 0.6f),
                modifier = Modifier.fillMaxWidth()
            ) {
                Row(
                    modifier = Modifier.padding(12.dp),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Icon(
                        Icons.Default.CheckCircle,
                        contentDescription = null,
                        tint = MaterialTheme.colorScheme.primary,
                        modifier = Modifier.size(20.dp)
                    )
                    Spacer(modifier = Modifier.width(10.dp))
                    Text(
                        text = if (isTelugu)
                            "ఆన్‌లైన్ బుకింగ్స్ లేవు • ఆసుపత్రి రిసెప్షన్ వద్ద నేరుగా సంప్రదించండి"
                        else
                            "Walk-in OP Only • Direct Registration at Hospital Reception Counter",
                        style = MaterialTheme.typography.labelSmall.copy(
                            fontWeight = FontWeight.Bold,
                            color = MaterialTheme.colorScheme.primary
                        )
                    )
                }
            }
        }

        items(doctors) { doc ->
            ElevatedCard(
                shape = RoundedCornerShape(18.dp),
                colors = CardDefaults.elevatedCardColors(containerColor = MaterialTheme.colorScheme.surface),
                modifier = Modifier.fillMaxWidth()
            ) {
                Column(modifier = Modifier.padding(18.dp)) {
                    Row(verticalAlignment = Alignment.Top) {
                        Surface(
                            shape = CircleShape,
                            color = if (doc.id == "doc1") MaterialTheme.colorScheme.primaryContainer else MaterialTheme.colorScheme.secondaryContainer,
                            modifier = Modifier.size(56.dp)
                        ) {
                            Box(contentAlignment = Alignment.Center) {
                                Icon(
                                    imageVector = if (doc.id == "doc1") Icons.Default.MedicalServices else Icons.Default.Mood,
                                    contentDescription = doc.name,
                                    tint = if (doc.id == "doc1") MaterialTheme.colorScheme.primary else MaterialTheme.colorScheme.secondary,
                                    modifier = Modifier.size(30.dp)
                                )
                            }
                        }

                        Spacer(modifier = Modifier.width(14.dp))

                        Column(modifier = Modifier.weight(1f)) {
                            Row(
                                modifier = Modifier.fillMaxWidth(),
                                horizontalArrangement = Arrangement.SpaceBetween,
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                Text(
                                    text = if (isTelugu) doc.nameTe else doc.name,
                                    style = MaterialTheme.typography.titleMedium.copy(fontWeight = FontWeight.Bold)
                                )
                                Surface(
                                    shape = RoundedCornerShape(6.dp),
                                    color = Color(0xFFFEF3C7)
                                ) {
                                    Text(
                                        text = "★ ${doc.rating}",
                                        style = MaterialTheme.typography.labelSmall.copy(
                                            color = Color(0xFF92400E),
                                            fontWeight = FontWeight.Bold
                                        ),
                                        modifier = Modifier.padding(horizontal = 6.dp, vertical = 2.dp)
                                    )
                                }
                            }

                            Text(
                                text = if (isTelugu) doc.designationTe else doc.designation,
                                style = MaterialTheme.typography.bodySmall.copy(
                                    color = MaterialTheme.colorScheme.primary,
                                    fontWeight = FontWeight.SemiBold
                                )
                            )

                            Text(
                                text = doc.qualification,
                                style = MaterialTheme.typography.bodySmall.copy(
                                    color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.6f),
                                    fontSize = 11.sp
                                )
                            )
                        }
                    }

                    Spacer(modifier = Modifier.height(14.dp))
                    Divider(color = MaterialTheme.colorScheme.outlineVariant.copy(alpha = 0.5f))
                    Spacer(modifier = Modifier.height(10.dp))

                    Text(
                        text = if (isTelugu) "ప్రత్యేక నైపుణ్యాలు & చికిత్సలు:" else "Specializations & Procedures:",
                        style = MaterialTheme.typography.labelSmall.copy(fontWeight = FontWeight.Bold)
                    )
                    Spacer(modifier = Modifier.height(6.dp))

                    doc.specializations.forEach { spec ->
                        Row(
                            verticalAlignment = Alignment.CenterVertically,
                            modifier = Modifier.padding(vertical = 2.dp)
                        ) {
                            Icon(
                                Icons.Default.Check,
                                contentDescription = null,
                                tint = MaterialTheme.colorScheme.primary,
                                modifier = Modifier.size(14.dp)
                            )
                            Spacer(modifier = Modifier.width(6.dp))
                            Text(spec, style = MaterialTheme.typography.bodySmall.copy(fontSize = 12.sp))
                        }
                    }

                    Spacer(modifier = Modifier.height(12.dp))

                    Surface(
                        shape = RoundedCornerShape(10.dp),
                        color = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.6f),
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        Row(
                            modifier = Modifier.padding(12.dp),
                            horizontalArrangement = Arrangement.SpaceBetween,
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Column {
                                Text(
                                    text = if (isTelugu) "ఓపీ సమయాలు:" else "Daily OP Timings:",
                                    style = MaterialTheme.typography.labelSmall.copy(color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.6f))
                                )
                                Text(
                                    text = doc.opTimings,
                                    style = MaterialTheme.typography.bodySmall.copy(fontWeight = FontWeight.SemiBold)
                                )
                            }
                            Surface(
                                shape = RoundedCornerShape(6.dp),
                                color = MaterialTheme.colorScheme.surface
                            ) {
                                Text(
                                    text = "Walk-in",
                                    style = MaterialTheme.typography.labelSmall.copy(
                                        fontWeight = FontWeight.Bold,
                                        color = MaterialTheme.colorScheme.primary
                                    ),
                                    modifier = Modifier.padding(horizontal = 8.dp, vertical = 4.dp)
                                )
                            }
                        }
                    }

                    Spacer(modifier = Modifier.height(12.dp))

                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.spacedBy(8.dp)
                    ) {
                        Button(
                            onClick = {
                                val intent = Intent(Intent.ACTION_DIAL, Uri.parse("tel:09515574014"))
                                context.startActivity(intent)
                            },
                            modifier = Modifier.weight(1f),
                            shape = RoundedCornerShape(10.dp)
                        ) {
                            Icon(Icons.Default.Phone, contentDescription = null, modifier = Modifier.size(16.dp))
                            Spacer(modifier = Modifier.width(6.dp))
                            Text(if (isTelugu) "కాల్ రిసెప్షన్" else "Call Reception")
                        }

                        OutlinedButton(
                            onClick = onNavigateToTimings,
                            modifier = Modifier.weight(1f),
                            shape = RoundedCornerShape(10.dp)
                        ) {
                            Text(if (isTelugu) "ఓపీ సమయాలు" else "View Schedule")
                        }
                    }
                }
            }
        }
    }
}
